import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEvents1646055230384 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'events',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'image',
          type: 'varchar',
        },
        {
          name: 'categories',
          type: 'varchar',
        },
        {
          name: 'entry_value',
          type: 'float',
        },
        {
          name: 'create_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
