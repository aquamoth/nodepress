import Component from "../../core/component";
//import { Request, Response } from "express";
import { ActionResult } from "../../core/types/viewengine";
//const pkg = require("../../../package.json");

export default class Page extends Component
{
    public Index(model: {page: number}): ActionResult {
        console.log("np-core-page.Index()", model);

        const viewModel = {title: "", description: "", content: ""};

        switch (model.page) {
            case 251: //homepage
                viewModel.title = "Lär känna WordPress";
                viewModel.description = "WordPress är programvara med öppen källkod som du kan använda för att skapa en vacker webbplats, blogg eller app.";
                viewModel.content = this.htmlForPage251();
                break; 
            case 858: //support
                viewModel.title = "WordPress-support";
                viewModel.description = "Vi har en mängd olika resurser som hjälper dig att få ut så mycket som möjligt av WordPress.";
                viewModel.content = "";
                break; 
            case 689: //news
                break; 
        }

        return this.View(viewModel, "index");
    }

    private htmlForPage251(){
        return `
		<div class="home-welcome">
			<div id="lang-guess-wrap"></div>

			<section class="intro">
				<p class="subheading">Vackra teman, kraftfulla funktioner och full frihet att bygga den webbplats du vill ha. WordPress är på en och samma gång både gratis och ovärderligt.</p>
				<div class="screenshots">
					<img src="https://s.w.org/images/home/screen-themes.png?3" class="dashboard">
					<img src="https://s.w.org/images/home/iphone-themes.png?3" class="dashboard-mobile">
				</div>
			</section>

			<section class="showcase">
				<h2>De bästa förlitar sig på det</h2>
				<p class="subheading">
					35 % av webben använder WordPress, allt från hobbybloggar till de största webbplatserna för nyheter på nätet.				</p>
				<div class="collage">

				</div>
				<p class="cta-link"><a href="https://wordpress.org/showcase/">Upptäck fler webbplatser som är byggda med WordPress</a></p>
			</section>

			<section class="features">
				<h2>Kraftfulla funktioner</h2>
				<p class="subheading">Obegränsade möjligheter. Vad kommer du att skapa?</p>
				<ul>
					<li>
						<span class="dashicons dashicons-admin-customizer"></span>
						Anpassningsbara<br>designer					</li>
					<li>
						<span class="dashicons dashicons-welcome-widgets-menus"></span>
						SEO-<br>anpassat					</li>
					<li>
						<span class="dashicons dashicons-smartphone"></span>
						Responsiva<br>webbplatser för mobil					</li>
					<li>
						<span class="dashicons dashicons-chart-line"></span>
						Hög<br>prestanda					</li>
					<li>
						<a href="https://wordpress.org/mobile/"><img src="https://s.w.org/images/home/icon-run-blue.svg">
							Hantera<br>när du är på språng</a>
					</li>
					<li>
						<span class="dashicons dashicons-lock"></span>
						Hög<br>säkerhet					</li>
					<li>
						<span class="dashicons dashicons-images-alt2"></span>
						Kraftfull<br>hantering av media					</li>
					<li>
						<span class="dashicons dashicons-universal-access"></span>
						Enkelt och<br>åtkomligt					</li>
				</ul>
				<p>
					Utöka WordPress med hjälp av fler än 54&nbsp;000 tillägg för att din webbplats ska göra det du behöver. Lägg till e-handelsbutiker, gallerier, e-postlistor, forum, statistik och <a href="https://sv.wordpress.org/plugins/">mycket mer</a>.				</p>
			</section>

			<section class="community-2">
				<div class="screen"></div>
				<div class="container">
					<h2>Community</h2>
					<p class="subheading">
						Hundratusentals utvecklare, innehållsbyggare och webbplatsägare möts på WordPress-träffar varje månad i 817 städer i hela världen.					</p>
					<a class="button button-secondary button-large" href="https://make.wordpress.org/community/meetups-landing-page">Hitta en WordPress-community nära dig</a>
				</div>
			</section>

			<section class="get">
				<h2>Kom igång med WordPress</h2>
				<p class="subheading">Över 60 miljoner personer har valt WordPress som motor för deras hem på webben – Välkommen du med!</p>
				<div class="cta-wrapper">
					<a href="https://sv.wordpress.org/download/" class="button button-primary button-xl">Skaffa WordPress</a>
				</div>
			</section>
		</div>

		<div id="home-below" class="home-below row gutters">
			<div class="col-4">
				<h4><a href="https://sv.wordpress.org/news/">Nyheter från vår blogg</a></h4>

				<h5><a href="https://sv.wordpress.org/2019/11/03/2019-ars-enkat-for-wordpress-anvandare-och-utvecklare/" rel="bookmark">2019 års enkät för WordPress-användare och -utvecklare</a></h5><div class="entry-summary"><p>Nu har årets enkät till användare och utvecklare öppnats! Om du använder WordPress, eller om du arbetar med WordPress, ber vi att du berättar om dina intryck. Det tar bara några minuter att fylla i enkäten (på engelska) och resultatet ger oss goda insikter i hur WordPress används. I år finns enkäten för första gången […]</p>
</div>			</div>

			<div class="col-4">
				<h4>Inte svårare än så här…</h4>

				<ol class="steps">
					<li class="one">
						<span></span>
						Hitta ett <a href="https://wordpress.org/hosting/">tillförlitligt webbhotell</a> och kanske på detta sätt samtidigt stödja WordPress.					</li>
					<li class="two">
						<span></span>
						<a href="https://sv.wordpress.org/download/">Ladda ned och installera WordPress</a>. Tack vare vår berömda 5-minutersinstallation är det enklare än någonsin att publicera.					</li>
					<li class="three">
						<span></span>
						Ägna en del tid åt att <a href="https://developer.wordpress.org">läsa vår dokumentation</a>, lära sig mer om WordPress för varje dag och även börja hjälpa andra.					</li>
				</ol>
			</div>

			<div class="col-2 first">
				<h4><a href="/about/swag/">WordPress-produkter</a></h4>
				<a href="/about/swag/">
											<img width="132" height="177" src="https://s.w.org/images/home/swag_col-1.jpg?1" alt="WordPress-produkter">
									</a>
			</div>

			<div class="col-2">
				<h4><a href="https://wordpress.org/showcase/">WordPress-användare</a></h4>

									<ul id="notable-users" class="notable-users">
						<li><a href="https://wordpress.org/showcase/the-rolling-stones/"><img src="https://s.w.org/images/notableusers/rollingstones-2x.png" alt="rollingstones" width="130" height="57"></a></li><li><a href="https://wordpress.org/showcase/stylewatch-off-the-rack/"><img src="https://s.w.org/images/notableusers/people-2x.png" alt="people" width="130" height="57"></a></li><li><a href="https://wordpress.org/showcase/blondie/"><img src="https://s.w.org/images/notableusers/blondie-2x.png" alt="blondie" width="130" height="57"></a></li>					</ul>
				
				<a class="showcase-link" href="https://wordpress.org/showcase/">… och hundratals fler</a>
			</div>
		</div>
        `;
    }

    public AdminBar(model: {}): ActionResult {
        console.log("np-core-page.AdminBar()", model);
        
        if(!model)
            model = { showSecondary: false };

        return this.View(model, "adminbar");
    }
}