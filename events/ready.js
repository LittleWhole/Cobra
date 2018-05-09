module.exports = async function(client) {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user.username}!`);
        client.user.setActivity("=>help", {type: "Listening"});
    });
};