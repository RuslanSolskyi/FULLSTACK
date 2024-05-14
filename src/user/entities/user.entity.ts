import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {Student} from "../../database/entities/student.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text' })
    userName: string;

    // @Column({ type: 'enum', enum: ERole })
    // role: ERole;

    @Column({ type: 'text' })
    password: string;

    @OneToMany(() => Student, (student) => student.user, { onDelete: 'CASCADE'})
    students: Student[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
