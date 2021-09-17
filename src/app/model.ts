export class Model{
    user;
    items=[new TodoItem("",false)];

    constructor(){
        this.user="Emirhan Taşçı";
        this.items=[
            new TodoItem("Spor", true),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Kitap", false),
            new TodoItem("Sinema", false)
          ];
    }
}

export class TodoItem{
    aciklama: String;
    durum: Boolean;

    constructor(aciklama: String, durum: boolean){
        this.aciklama=aciklama;
        this.durum=durum;
    }
}
