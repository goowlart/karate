function displayName() {
//user information
		var name = document.getElementById("sexMan").value;
		var age = document.getElementById("ageid").value;
		var weight = document.getElementById("weightid").value;
    //backup sex
		var male = 0;
		var female = 1;
		var genre;



//test sex
if (document.getElementById("sexMan").checked == true) {
 genre = male;
} else if (document.getElementById("sexWoman").checked == true) {
	genre = female;

}


//test  language
if (document.getElementById("languageEN").checked == true) {
 language = 1;
} else if (document.getElementById("languageFR").checked == true) {
	language = 0;

}


//category names in English and French
var u11FR = "PREMINIM";
var u11EN = "U11";

var u13FR = "MINIMES";
var u13EN = "U13";

var u15FR = "CADETTES";
var u15EN = "U15";

var u17FR = "ESPOIRS";
var u17EN = "U17";

var categoryJunior = "JUNIORS";

var categorySeniors = "SENIORS";


//save
var categoryAgeFR;
var categoryAgeEN;
var ategoryWeight;
var individualCombat;
var teamCombat;




//test start

if (age == 9 || age == 10) {// category PREMINIM male/female
	if (weight < 30) {
		categoryAgeFR = u11FR;
		categoryAgeEN = u11EN;
		ategoryWeight = "-30 kg";
		individualCombat = "1:30 min";
		teamCombat = "undefined";

	} else if (weight >= 30 && weight <= 50) {
		categoryAgeFR = u11FR;
		categoryAgeEN = u11EN;
		ategoryWeight = "30kg+ -50kg";
		individualCombat = "1:30 min";
		teamCombat = "undefined";
	} else
	    categoryAgeFR = u11FR;
	    categoryAgeEN = u11EN;
	    ategoryWeight = "+50kg";
	    individualCombat = "1:30 min";
	    teamCombat = "undefined";
}if (age == 9 || age == 10) {
	if (weight < 30) {
		categoryAgeFR = u11FR;
		categoryAgeEN = u11EN;
		ategoryWeight = "-30 kg";
		individualCombat = "1:30 min";
		teamCombat = "undefined";
	} else if (weight >= 30 && weight <= 50) {
		categoryAgeFR = u11FR;
		categoryAgeEN = u11EN;
		ategoryWeight = "30kg+ -50kg";
		individualCombat = "1:30 min";
		teamCombat = "undefined";
	} else
	    categoryAgeFR = u11FR;
	    categoryAgeEN = u11EN;
	    ategoryWeight = "+50kg";
	    individualCombat = "1:30 min";
	    teamCombat = "undefined";
}if (age == 11 || age == 12) { // category PREMINIM male/female
	if (weight < 30) {
		categoryAgeFR = u13FR;
		categoryAgeEN = u13EN;
		ategoryWeight = "-30kg";
		individualCombat = "2:00 min";
		teamCombat = "undefined";

	} else if (weight >= 30 && weight <= 50) {
		categoryAgeFR = u13FR;
		categoryAgeEN = u13EN;
		ategoryWeight = "30kg+ -50kg";
		individualCombat = "2:00 min";
		teamCombat = "undefined";
	} else {
		categoryAgeFR = u13FR;
		categoryAgeEN = u13EN;
		ategoryWeight = "+50 kg";
		individualCombat = "2:00 min";
		teamCombat = "undefined";
}





}if (age == 13 || age == 14) { // category CADETTES female
	if (genre == 1) {
		if (weight < 32) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-32kg";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 32 && weight < 36) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "32kg+ -36kg";
			individualCombat = "3:00 min";
			teamCombat = "3 minutes";
		} else if (weight >= 36 && weight < 40) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-40 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 40 && weight < 44) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-44 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 44 && weight < 48) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-48 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 48 && weight < 52) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-52 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 52 && weight < 57) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-57kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 57 && weight < 63) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-63 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 63) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "+63 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
}




	} else if (genre == 0) { // category CADETTES male
		if (weight < 34) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-34 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 34 && weight < 38) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-38 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 38 && weight < 42) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-42 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 42 && weight < 46) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-46 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 46 && weight < 50) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-50 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 50 && weight < 55) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-55 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 55 && weight < 60) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-60kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 60 && weight < 66) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-66 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		} else if (weight >= 66) {
			categoryAgeFR = u15FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "+66 kgs";
			individualCombat = "3:00 min";
			teamCombat = "3:00 min";
		}

	}
}







if (age == 15 || age == 16) {// category ESPOIRS female
	if (genre == 1) {
		if (weight < 40) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-40 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 40 && weight < 44) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-44 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 44 && weight < 48) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-48 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 48 && weight < 52) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u15EN;
			ategoryWeight = "-52 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 52 && weight < 57) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-57kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 57 && weight < 63) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-63 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 63 && weight < 70) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-70 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 70) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "+70 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		}




	} else if (genre == 0) { // category ESPOIRS male
		if (weight < 42) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-42 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 42 && weight < 46) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-46 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 46 && weight < 50) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-50 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 50 && weight < 55) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-55 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 55 && weight < 60) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-60kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 && weight < 66) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-66 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 && weight < 73) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-73 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 73 && weight < 81) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-81 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 81 && weight < 90) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "-90 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 90) {
			categoryAgeFR = u17FR;
			categoryAgeEN = u17EN;
			ategoryWeight = "+90 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		}
	}
}






if (age == 17 || age == 18 || age == 19) { // category JUNIORS female
	if (genre == 1) {
		if (weight < 44) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-44 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 44 & weight < 48) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-48 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 48 & weight < 52) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-52 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 52 & weight < 57) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-57kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 57 & weight < 63) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-63 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 63 & weight < 70) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-70 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 70 & weight < 78) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-78 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 78) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "+78 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		}




	} else if (genre == 0) { // category JUNIORS male
		if (weight < 55) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-55 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 55 & weight < 60) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-60kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 & weight < 66) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-66 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 & weight < 73) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-73 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 73 & weight < 81) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-81 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 81 & weight < 90) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-90 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 90 & weight < 100) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			ategoryWeight = "-100 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 100) {
			categoryAgeFR = categoryJunior;
			categoryAgeEN = categoryJunior;
			categoryAgeEN = u17EN;
			ategoryWeight = "+100 kgs";
			individualCombat = "4:00 min";
			teamCombat = "4:00 min";
		}
	}
}




if (age > 20) { // category SENIORS female
	if (genre == 1) {
		if (weight < 48) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-48 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 48 & weight < 52) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-52 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 52 & weight < 57) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-57kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 57 & weight < 63) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-63 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 63 & weight < 70) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-70 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 70 & weight < 78) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-78 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 78) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "+78 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		}



	} else if (genre == 0) { // category SENIORS male
		if (weight < 60) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-60kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 & weight < 66) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-66 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 60 & weight < 73) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-73 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 73 & weight < 81) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-81 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 81 & weight < 90) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-90 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 90 & weight < 100) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "-100 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		} else if (weight >= 100) {
			categoryAgeFR = categorySeniors;
			categoryAgeEN = categorySeniors;
			ategoryWeight = "+100 kgs";
			individualCombat = "5:00 min";
			teamCombat = "4:00 min";
		}
}




// message in french
}if (language == 0) {
	alert( "Vous allez combattre dans la catégorie " + categoryAgeFR +" poids de "+ ategoryWeight);
	alert("Combat individuel de " + individualCombat);
	alert("Combat d'équipe " + teamCombat);
// message in english
} else if (language == 1) {
	alert("You will fight in the category " + categoryAgeEN + " weight of " + ategoryWeight);
	alert("Individual combat of " + individualCombat);
	alert("Team combat " + teamCombat);
}
}
