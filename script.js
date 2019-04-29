var home = document.getElementById("home");
var resetAble = false;

var about = document.getElementById("about");
var aboutTitle = document.getElementById("about-title");
var aboutContent = document.getElementById("about-content");

var contact = document.getElementById("contact");
var contactTitle = document.getElementById("contact-title");
var contactContent = document.getElementById("contact-content");

var shop = document.getElementById("shop");
var shopTitle = document.getElementById("shop-title");
var shopContent = document.getElementById("shop-content");



function reset() {
	//reset about
	about.classList.remove("about-full-about");
	about.classList.remove("contact-full-about");
	about.classList.remove("shop-full-about");
	aboutTitle.classList.remove("hidden");
	aboutTitle.classList.remove("rotate");
	aboutContent.classList.add("hidden");

	//reset contact
	contact.classList.remove("about-full-contact");
	contact.classList.remove("contact-full-contact");
	contact.classList.remove("shop-full-contact");
	contactTitle.classList.remove("hidden");
	contactTitle.classList.remove("rotate");
	contactContent.classList.add("hidden");

	//reset shop
	shop.classList.remove("about-full-shop");
	shop.classList.remove("contact-full-shop");
	shop.classList.remove("shop-full-shop");
	shopTitle.classList.remove("hidden");
	shopContent.classList.add("hidden");

	//reset home
	home.classList.remove("full-home");

}
about.addEventListener("click", function(){
	reset();
	about.classList.add("about-full-about");
	contact.classList.add("about-full-contact");

	shop.classList.add("about-full-shop");

	aboutTitle.classList.add("hidden");
	aboutContent.classList.remove("hidden");

	home.classList.add("full-home");
	resetAble = true;
});

contact.addEventListener("click", function(){
	reset();

	about.classList.add("contact-full-about");
	contact.classList.add("contact-full-contact");
	shop.classList.add("contact-full-shop");

	contactTitle.classList.add("hidden");
	contactContent.classList.remove("hidden");

	home.classList.add("full-home");
	resetAble = true;
});

shop.addEventListener("click", function(){
	reset();

	about.classList.add("shop-full-about");
	aboutTitle.classList.add("rotate");
	contact.classList.add("shop-full-contact");
	contactTitle.classList.add("rotate");

	shop.classList.add("shop-full-shop");

	shopTitle.classList.add("hidden");
	shopContent.classList.remove("hidden");

	home.classList.add("full-home");
	resetAble = true;
});

home.addEventListener("click", function(){
	if(resetAble){
		reset();
	} else {

	}
});
