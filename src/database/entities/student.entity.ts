import {
  Column,
  CreateDateColumn,
  Entity, Index, JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ECourseFormat } from './enums/course-format.enum';
import { ECourseType } from './enums/course-type.enum';
import { EStatus } from './enums/status.enum';
import {User} from "../../user/entities/user.entity";

@Entity('student')
export class StudentEntity  {
  @PrimaryGeneratedColumn({ name: 'student_id'})
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  surname: string;

  @Column({ type: 'text', nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  phone: string;

  @Column({ type: 'int', nullable: false })
  age: number;

  @Column({ type: 'text', nullable: false })
  course: string;

  @Column({ type: 'enum', enum: ECourseFormat, default: ECourseFormat.ONLINE })
  course_format: ECourseFormat;

  @Column({ type: 'enum', enum: ECourseType })
  course_type: ECourseType;

  @Column({ type: 'enum', enum: EStatus, default: EStatus.NEW })
  status: EStatus;

  @Column({ type: 'numeric', nullable: false })
  sum: number;

  @Column({ type: 'numeric', nullable: false })
  alreadyPaid: number;

  @Column({ type: 'text', nullable: false })
  group: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.students)
  @JoinColumn({ name: 'user_id'})
  user: User;
}
