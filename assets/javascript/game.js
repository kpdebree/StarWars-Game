console.log("ready")


	var opponents = 3;
	var player_selected = false;
	var opponent_selected = false;
	var current_player = {};
	var current_opponent = {};
	var dodge = [false, false];
	var hp_bar_array = $(".health-points");
	var player_mana_points = $("#player-mana-points");
	var opponent_mana_points = $("#opponent-mana-points");
	var hp_bar_display_array = $(".progress-bar");

	var characters = [{
		name: "Luke Skywalker",
		id: "luke-skywalker",
		base_health_points: 300,
		health_points: 300,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 30,
		attack_power: 30,
		counter_attack_power: 30,
		jedi_number: 0,
		faction: "Jedi",
		character_number: 0,
		background: "assets/images/lukebackdrop.jpg",
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
		base_attack_power: 15,
		attack_power: 15,
		counter_attack_power: 15,
		jedi_number: 1,
		faction: "Jedi",
		character_number: 1,
		background: "assets/images/leiabackdrop.jpg",
		special_title: "Stun",
		special_descr: "Leia Organa has the ability to stun an enemy with a hidden blaster, blocking their attack for a turn.",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Han Solo",
		id: "han-solo",
		base_health_points: 500,
		health_points: 500,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		jedi_number: 2,
		faction: "Jedi",
		character_number: 2,
		background: "assets/images/hansolobackdrop.jpg",
		special_title: "Wookie Ally",
		special_descr: "Han Solo's Wookie Ally, Chewbacca, has the ability to join him in battle and fire a second shot",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Darth Vader",
		id: "darth-vader",
		base_health_points: 600,
		health_points: 600,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 20,
		attack_power: 20,
		counter_attack_power: 20,
		sith_number: 0,
		faction: "Sith",
		character_number: 3,
		background: "assets/images/vaderbackdrop.jpg",
		special_title: "Force Choke",
		special_descr: "Lord Vader has the ability to use the force to choke his enemies into submission. Deals double base damage, and base damage to mana",
		dialogue_first: ["Father...", "", ""],
		dialogue_special: "Obi-Wan: Luke, use the force!",
		dialogue_victory: ["Response 1", "No, your highness. I am a Jedi, like my father before me.", "Response 3"],
		dialogue_defeat: ["Response 1", "Response 2", "Response 3"],

	}, {
		name: "Darth Sidious",
		id: "darth-sidious",
		base_health_points: 150,
		health_points: 150,
		base_mana_points: 100,
		mana_points: 100,
		base_attack_power: 40,
		attack_power: 40,
		counter_attack_power: 40,
		sith_number: 1,
		faction: "Sith",
		character_number: 4,
		background: "assets/images/thronebackdrop.jpg",
		special_title: "Force Lightning",
		special_descr: "Darth Sidious, as a dark lord of the Sith, has the ability to use his extreme power to drain power and deal significant damage.",
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
		background: "assets/images/lukebackdrop.jpg",
		special_title: "Dual Blasters",
		special_descr: "Boba Fett has the ability to use dual blasters for a time, which deals double damage.",
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
		$(".background-image img").attr("src", current_player.background)


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
		$(".background-image img").attr("src", current_opponent.background)

	}


	function PlayerAttack() {

		$("#" + current_player.id).animate({top: "500px", right: "50%"}, 200);
		//Runs an AI to determine what action should be taken
		CombatAI();

		if (dodge[1] === false) {

			current_opponent.health_points = current_opponent.health_points - current_player.attack_power;

			if(current_opponent.health_points <= 0) {

				current_opponent.health_points = 0
			}

			//Increases attacking power
			current_player.attack_power = current_player.attack_power + 0.5 * current_player.base_attack_power;

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

		} else {

			$("#text-player").html(current_player.name + " missed " + current_opponent.name)

			dodge[1] = false;
		}

		$("#" + current_player.id).animate({top: "500px", right: "60%"}, 200);


		//Subtracts HP

		} 



	function PlayerSpecial() {

		CombatAI();

		$("#text-player").html(current_player.name + " used " + current_player.special_title);

	}

	function PlayerDodge() {

		dodge[0] = true; 
		$("#text-player").html(current_player.name + " dodged " + current_opponent.name);

		CombatAI();
		dodge[0] = false;

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

		if (randomNumber === 2 && current_opponent.mana_points === 100) {

			OpponentSpecial();
			console.log("Special")

		} else if (randomNumber === 2) {

			OpponentAttack();
			console.log("Attack by Default")
		}


	}

	function OpponentAttack() {

		$("#" + current_opponent.id).animate({top: "500px", right: "50%"}, 200);

		if (dodge[0] === false) {

			current_player.health_points = current_player.health_points - current_opponent.counter_attack_power;

			if(current_opponent.health_points <= 0) {

				current_opponent.health_points = 0
			}

			$(hp_bar_array[current_player.character_number]).html(current_player.health_points);

			var current_player_percent = (current_player.health_points / current_player.base_health_points) * 100;

			if (current_player_percent < 50) {
				$(hp_bar_display_array[current_player.character_number]).addClass("progress-bar-warning");
			}

			if (current_player_percent < 20) {
				$(hp_bar_display_array[current_player.character_number]).addClass("progress-bar-danger");
			}

			$(hp_bar_display_array[current_player.character_number]).css("width", current_player_percent + "%")



		} else {

			dodge[0] = false;
			$("#text-opponent").html(current_opponent.name + " missed " + current_player.name)


		} $("#" + current_opponent.id).animate({top: "500px", right: "40%"}, 200);

	}

	function OpponentSpecial() {


		// $("#text-opponent").html(current_opponent.name + " used " + current_opponent.special_title " on " + current_player.name)

			switch(current_opponent.character_number) {

				//Luke Skywalker
				case 0:
					
				break;

				//Leia Organa
				case 1:
					

				break;

				//Han Solo
				case 2:
					

				break;

				//Darth Vader
				case 3:
					

				break;
				//Darth Sidious
				case 4:
					

				break;

				//Boba Fett
				case 5:
					

				break;
			}



		}
		
		

	function OpponentDodge() {

		$("#" + current_opponent.id).animate({right: "-=150px"}, 200);
		dodge[1] = true;
		$("#" + current_opponent.id).animate({top: "500px", right: "40%"}, 200);

		$("#text-opponent").html(current_opponent.name + " dodged " + current_player.name);

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

$(document).on("click", "#p_dodge", function(e) {

	PlayerDodge();

})

$(document).on("click", "#p_special", function(e) {

	PlayerSpecial();

})