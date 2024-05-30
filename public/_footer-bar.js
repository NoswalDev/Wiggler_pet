class FooterBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<div class="footerwrap"><a href="about"><span class="tooltip"><img src="images/Wigglis.webp" class="wigglis" alt="https://www.wiggler.pet/about"/><span class="tooltiptext">About Us</span></span></a><a href="https://www.wiggler.pet"><span class="tooltip"><img src="images/farcaster.webp" class="wigglis" alt="https://www.wiggler.pet"><span class="tooltiptext">Home</span></span></a><!--<br><h3>For older/Basegame guides, you can visit our Archive here</h3><br><a href="ARCHIVE LINK"><img src="images/archive.webp" class="wigglis" alt="ARCHIVE LINK"></a>--></div>`;
  }
}
if ("customElements" in window) {
  customElements.define("footer-bar", FooterBar);
}
