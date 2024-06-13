import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {StudentEntity} from "../../database/entities/student.entity";
import {CategoryEntity} from "../../category/entities/category.entity";
import {Transaction} from "../../transaction/entities/transaction.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    password: string;

    @Column({ type: 'text', nullable: false })
    email: string;

    @OneToMany(() => CategoryEntity, (category) => category.user)
    categories: CategoryEntity[];

    @OneToMany(() => Transaction, (transaction) => transaction.user, { onDelete: 'CASCADE' })
    transactions: Transaction[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => StudentEntity, (student) => student.user, { onDelete: 'CASCADE' })
    students: StudentEntity[];
}
