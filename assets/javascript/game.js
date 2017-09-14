console.log("ready")


	var opponents = 3;
	var player_selected = false;
	var opponent_selected = false;
	var current_player = {};
	var current_opponent = {};
	var hp_bar_array = $(".health-points");
	var hp_bar_display_array = $(".progress-bar");

	var characters = [{
		name: "Luke Skywalker",
		id: "luke-skywalker",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		jedi_number: 0,
		faction: "Jedi",
		character_number: 0,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Leia Organa",
		id: "leia-organa",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		jedi_number: 1,
		faction: "Jedi",
		character_number: 1,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Han Solo",
		id: "han-solo",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		jedi_number: 2,
		faction: "Jedi",
		character_number: 2,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Darth Vader",
		id: "darth-vader",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		sith_number: 0,
		faction: "Sith",
		character_number: 3,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Darth Sidious",
		id: "darth-sidious",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		sith_number: 1,
		faction: "Sith",
		character_number: 4,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Boba Fett",
		id: "boba-fett",
		base_health_points: 200,
		health_points: 200,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		sith_number: 2,
		faction: "Sith",
		character_number: 5,
		background: "lukebackdrop.jpg",
		special_title: "The Force",
		special_descr: "Luke Skywalker has the ability to use the Force to drain energy from his opponent and heal himself.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}]

//selector
//selects object via onkey trigger, and removes same-side heroes, while moving enemies to a combat pool

	function selectPlayer(player) {

		console.log($(player).find(".id"))

		for (i = 0; i < characters.length; i++) {
			
			if( characters[i].id === player.id) {

				player_selected = true;
				current_player = characters[i];

			}
		}

		console.log(current_player.character_number)

		$("#" + current_player.id).animate({top: "500px", right: "60%"}, 200);


		switch(current_player.character_number) {

			//Luke Skywalker
			case 0:
				$("#leia-organa").css("display", "none");
				$("#han-solo").css("display", "none");

			break;

			//Leia Organa
			case 1:
				$("#luke-skywalker").css("display", "none");
				$("#han-solo").css("display", "none");

			break;

			//Han Solo
			case 2:
				$("#luke-skywalker").css("display", "none");
				$("#leia-organa").css("display", "none");

			break;

			//Darth Vader
			case 3:
				$("#darth-sidious").css("display", "none");
				$("#boba-fett").css("display", "none");

			break;
			//Darth Sidious
			case 4:
				$("#darth-vader").css("display", "none");
				$("#boba-fett").css("display", "none");

			break;

			//Boba Fett
			case 5:
				$("#darth-vader").css("display", "none");
				$("#darth-sidious").css("display", "none");

			break;
		}
	}

	//Selects the Opponent from temporary variable pushed from the button click
	function selectOpponent(enemy) {

		//Goes through the loop to determine which character was selected, and prevents double-selecting the same character twice
		for (i = 0; i < characters.length; i++) {
			
			if( characters[i].id === enemy.id && characters[i].id != current_player.id) {

				//turns boolean on
				opponent_selected = true;
				current_opponent = characters[i];
				console.log("Current Opponent: " + current_opponent.id)

			}
		}

		console.log(current_opponent.character_number)
		console.log("Current Opponent: " + current_opponent)

		$("#" + current_opponent.id).animate({top: "500px", right: "40%"}, 200);

	}


	function PlayerAttack() {

		//Runs an AI to determine what action should be taken
		CombatAI();

		//Subtracts HP
		current_opponent.health_points = current_opponent.health_points - current_player.attack_power;

		if(current_opponent.health_points <= 0) {

			current_opponent.health_points = 0
		}

		//Increases attacking power
		current_player.attack_power = current_player.attack_power + current_player.base_attack_power;

		//Updates graphic display
		$(hp_bar_array[current_opponent.character_number]).html(current_opponent.health_points);

		var current_opponent_percent = (current_opponent.health_points / current_opponent.base_health_points) * 100;

		if (current_opponent_percent < 50) {
			$(hp_bar_display_array[current_opponent.character_number]).addClass("progress-bar-warning");
		}

		if (current_opponent_percent < 20) {
			$(hp_bar_display_array[current_opponent.character_number]).addClass("progress-bar-danger");
		}

		$(hp_bar_display_array[current_opponent.character_number]).css("width", current_opponent_percent + "%")

		if(current_opponent.health_points <= 0) {

				$("#" + current_opponent.id).css("display", "none");
				alert(current_opponent.name + " has been defeated")
				opponent_selected = false;
				current_opponent = {};
				opponents--;

				if(opponents <= 0) {
					alert("You have won!")
				}
		}





	}

	function PlayerSpecial() {

	}

	function PlayerDodge() {

	}

	function CombatAI() {

		var randomNumber = Math.floor(Math.random() * 3);

		console.log(randomNumber)

		if (randomNumber === 0 ) {

			OpponentAttack();
			console.log("Attack")
		}

		if (randomNumber === 1 ) {
			
			OpponentDodge();

			console.log("Dodge")
		}


	}

	function OpponentAttack() {

	}

	function OpponentSpecial() {
		
	}

	function OpponentDodge() {

	}



$(document).on("click", ".character", function(e) {

	if (player_selected === false) {

		selectPlayer(this);
		console.log(this.id)

	} else if (opponent_selected === false) {

		selectOpponent(this);
	}

})

$(document).on("click", "#p_attack", function(e) {

	PlayerAttack();

})