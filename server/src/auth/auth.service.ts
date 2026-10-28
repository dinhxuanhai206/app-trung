import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs';

export interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  fullName: string;
  role: 'student' | 'teacher' | 'admin';
  createdAt: Date;
}

@Injectable()
export class AuthService {
  // In-memory data store for demonstration & development
  private users: UserRecord[] = [
    {
      id: 'demo-user-1',
      email: 'student@example.com',
      passwordHash: bcrypt.hashSync('123456', 8),
      fullName: 'Học Viên Tiếng Trung',
      role: 'student',
      createdAt: new Date(),
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async register(dto: RegisterDto) {
    const existing = this.users.find(u => u.email.toLowerCase() === dto.email.toLowerCase());
    if (existing) {
      throw new ConflictException('Email này đã được sử dụng.');
    }

    const newUser: UserRecord = {
      id: 'usr_' + Date.now(),
      email: dto.email.toLowerCase(),
      passwordHash: await bcrypt.hash(dto.password, 8),
      fullName: dto.fullName || 'Học viên HSK',
      role: 'student',
      createdAt: new Date(),
    };

    this.users.push(newUser);

    const token = this.jwtService.sign({
      sub: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    return {
      message: 'Đăng ký tài khoản thành công',
      user: {
        id: newUser.id,
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role,
      },
      accessToken: token,
    };
  }

  async login(dto: LoginDto) {
    const user = this.users.find(u => u.email.toLowerCase() === dto.email.toLowerCase());
    if (!user) {
      throw new UnauthorizedException('Email hoặc mật khẩu không chính xác.');
    }

    const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedException('Email hoặc mật khẩu không chính xác.');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'Đăng nhập thành công',
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      accessToken: token,
    };
  }

  async getProfile(userId: string) {
    const user = this.users.find(u => u.id === userId);
    if (!user) {
      throw new UnauthorizedException('Không tìm thấy người dùng');
    }
    const { passwordHash, ...safeUser } = user;
    return safeUser;
  }
}
