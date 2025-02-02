onEvent("block.right_click", event => {
	let server = event.server
	let player = event.getEntity()

	let playsound = () => {
		server.runCommandSilent(`playsound minecraft:entity.drowned.shoot ambient @a ${player.x} ${player.y} ${player.z}`)
		server.runCommandSilent(`playsound minecraft:block.deepslate.place ambient @a ${player.x} ${player.y} ${player.z}`)
		server.runCommandSilent(`playsound minecraft:block.conduit.activate ambient @a ${player.x} ${player.y} ${player.z} 0.7`)
		server.runCommandSilent(`playsound create:mechanical_press_activation_belt_compounded_1 ambient @a ${player.x} ${player.y} ${player.z} 0.7`)
		server.runCommandSilent(`playsound minecraft:block.amethyst_cluster.hit ambient @a ${player.x} ${player.y} ${player.z} 1 0.7`)
		server.runCommandSilent(`playsound ad_astra:passing_spaceship ambient @a ${player.x} ${player.y} ${player.z} 0.3`)
	}

	if (event.getBlock() == asIdentifier("dice")
		&& player.getId() != "9e2faded-cafe-4ec2-c314-dad129ae971d"
		&& player.getMainHandItem() == null) {
		if (!randomEventCooling.includes(player.toString())) {
			randomEventCooling.push(player.toString())
			playsound()
			server.scheduleInTicks(diceCoolingConst, server, () => randomEventCooling = randomEventCooling.filter(function (item) { return item != player.toString() }))
		}
	}
})
