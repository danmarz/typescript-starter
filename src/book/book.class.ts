export class Book {
  constructor(
    public id?: number,
    public title?: string,
    public author?: string,
    public publisher?: string,
    public pages?: number,
    public description?: string,
    public genre?: string,
    public image_url?: string,
  ) {}
}
