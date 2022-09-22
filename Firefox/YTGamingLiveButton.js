const insertLocation = document.getElementById("start")

const HTMLContentToInsert = `
<div class='ytglb-toolbar-container'>
    <div class="ytglb-toolbar-wrapper">
        <a href="https://www.youtube.com/gaming/games"><img class="ytglb-live-icon" src="https://yt3.ggpht.com/NK1Joke7dInvvH2AQ7hHGN3Fqz9CxitzuLN-FIisfkw-I8JxGttDJMqVbkSvX5UKt5_GGpHs=s88-c-k-c0x00ffffff-no-rj-mo"></a>
    </div>
</div>
`
insertLocation.insertAdjacentHTML('beforeend', HTMLContentToInsert)