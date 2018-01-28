import * as ko from "knockout";
class list_item{
    constructor(public heading: string, public paragraph : string){}
}

class social_link{
    constructor(public social: string, public url: string){}
}

class itsme{

    goodname: string = "ASAD NOMAN";
    bio: string = "Giant Mind, Man with love for the back-end, spend 12-15 hours coding every week, I fix things";
    items : list_item[] = [
        new list_item("Marvel Movies really draw my attention",
        ":) :) :) :)"),
        new list_item("I like girls as well", 
        "that's pretty much natural"),
        new list_item("sometime it's just fun to code", 
        "isn't it?"),
        new list_item("Git for the first time :o", 
        "OMG, such an awesome experience")
    ];
    
}
ko.applyBindings(new itsme());