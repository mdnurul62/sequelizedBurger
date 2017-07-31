

var url = window.location.search;
var counter = 0;
// Construct a newPost object to hand to the database
var newBurger = {
    burger_name: null,
    devour: false,
    created_at: null
};
//single object to control the DOM
var burger = {
    
    init: function() {  
        this.cacheDom();
        this.renderHide();
        this.bindEvents();
    },
    cacheDom: function () {
        this.$body = $("#body");
        this.$burgerName = $("#burgerName");
        this.$submitBtn = $("#submitBtn");
        this.$uneatenBurger = $("#uneatenBurger");
        this.$btns = $("#btns");
        this.$eatenBurger = $("#eatenBurger");
    },
    bindEvents: function () {
        this.$submitBtn.on("click", this.createBurger.bind(this));
        //need to have a selector argument for dynamically create buttons.
        $(document).on("click", ".devBtn", this.updateBurger);
    }, 
    renderHide: function () {
        this.$body.hide();
    },
    renderShow: function () {
        this.$body.show();
    },
    //submits a new post to the db
    createBurger: function() {
        newBurger.burger_name = this.$burgerName.val().trim();
        //ajax post call with path url and newBurger data entered by user.
        $.post("api/create", newBurger)
            .done(function() {
                counter++;
                //dynamically appending newly added burger.
                var newDiv = $("<div>");
                newDiv.addClass("col-sm-4 well");
                newDiv.append("<p>" + newBurger.burger_name + " </p>");
                newDiv.attr("id", counter);
                burger.$burgers.append(newDiv);
                //dynamically appending devour buttons.
                var devourBtn = $("<button>Devour</button>");
                devourBtn.addClass("btn btn-md btn-danger devBtn");
                devourBtn.attr("value", counter);
                burger.$btns.append(devourBtn);
        });
        this.$burgerName.val("");
        this.renderShow();
    }, 
    
    eatenBurger: function() {
        //storing identifier into variable
        var toDelete = "#" + $(this).val();
        //adding to eaten area
        var newDiv = $("div");
        newDiv.addClass("col-sm-4 well");
        newDiv.append("<p>" + $(toDelete).text() + " </p>");
        burger.$eatenBurger.append(newDiv);
        //removing added burger
        $(toDelete).remove();
        //deleting the devour button.
        $(this).remove();     

    }
};

$( document ).ready(function() {
    burger.init();
});