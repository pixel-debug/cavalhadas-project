export interface IUseCase<Entity, CreateDto, UpdateDto, DeleteDto> {
  get(id: number): Promise<Entity | null>;
  getAll(): Promise<Entity[] | null>;
  create(entity: CreateDto): Promise<Entity>;
  update(id: number, entity: UpdateDto): Promise<void>;
  delete(id: number): Promise<void>;
}
