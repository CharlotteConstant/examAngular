export class Incident{
  constructor(
    public id: number,
    public titre: string,
    public email: string,
    public description: string,
    public level: string,
    public type: string,
    public progress: number,
    public dateCreation: string,
    public dateModification: string,
    public open: boolean
    ){}
}
