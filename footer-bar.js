class FooterBar extends HTMLElement {constructor () {super();this.innerHTML =`<a href="about"><img src="images/Wigglis.webp" class="wigglis" alt="https://www.wiggler.pet/about"/></a><!--<br><h3>For older/Basegame guides, you can visit our Archive here</h3><br><a href="ARCHIVE LINK"><img src="images/archive.webp" class="wigglis" alt="ARCHIVE LINK"></a>-->`;}}
if ('customElements' in window) {customElements.define('footer-bar', FooterBar);}