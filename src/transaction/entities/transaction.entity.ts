import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../../user/entities/user.entity";
import {CategoryEntity} from "../../category/entities/category.entity";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn({ name: 'transaction_id' })
    id: number;

    @Column({ type: 'text', nullable: true })
    title: string;

    @Column({ nullable: true })
    type: string;

    @ManyToOne(() => User, (user) => user.transactions)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => CategoryEntity, (category) => category.transactions)
    @JoinColumn({ name: 'category_id' })
    category: CategoryEntity;
}
