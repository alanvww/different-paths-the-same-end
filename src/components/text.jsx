import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import '../styles/text.css';

gsap.registerPlugin(ScrollTrigger);

export default function Text() {
	const horizontalSlide = useRef(null);
	const horizontalPanel = useRef(null);
	const content = useRef(null);

	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.to(horizontalSlide.current, {
				xPercent: 100,
				ease: 'slow',
				scrollTrigger: {
					trigger: horizontalSlide.current,
					pin: true,
					pinSpacer: true,
					markers: true,
					scrub: 1,
					start: 'top top',

					end: () => '+=' + content.current.clientWidth / 3,

					/*() =>
						'=' +
						window.innerWidth +
						ScrollTrigger.maxScroll(horizontalPanel.current, true),*/
				},
			});
		}, horizontalSlide);

		window.addEventListener('resize', () => {
			ScrollTrigger.refresh();
			this.forceUpdate();
		});

		return () => ctx.revert();
	}, []);

	// English version toggle
	const [more, setMore] = useState(false);

	const showMore = () => {
		setMore(!more);
	};

	const getImageUrl = (name) => {
		let url = new URL(`./src/assets/img/${name}.png`, import.meta.url).href;
		console.log(1 + url);
		return url;
	};

	return (
		<>
			<div className="container" ref={horizontalSlide}>
				<div className="horizontal" ref={horizontalPanel}>
					<div className="panel-content no-select" ref={content}>
						<p>
							疫情掀起了一段人們在家烹飪的風潮，麵包、蛋糕，甚至是一些明顯是因為有空才能做的料理都被各路高人一一完成。而我一個單身漢，因為工作每天需要往返不同城市，回家就只想呼呼大睡，自然是沒有這種興致給自己做頓飯，還落得寂寞。早在疫情前，我就很有興致在不同城市找到實惠又好吃的餐廳，雖然可能不是什麼山珍海味，但也是給自己辛勤工作的一個獎勵。再加上工作可能要有不同的應酬，三五聚會，大大小小的餐廳，我都記下來了。
						</p>
						<p>
							可惜一場疫情，不少我熟悉的餐廳都因為各種原因而無法繼續經營下去。不需要封閉管理的時候，各家食肆的落座率很明顯也並不高。家家都有難念的經，各行各業也在拼命支撐下去。在這種條件下，我的工作也還算是穩定，需要我往返成都和彭州，剛好也能讓我下下館子。
						</p>
						<p> 中午的一份炒幹雜，晚飯是過橋米線。 </p>
						<p>彭州這家蹄花很不錯。</p>
						<p>簡單的兩菜一湯，快炒店份量大還便宜。晚餐是米湯飯。</p>
						<p>樸素的早餐，中午和工友們去川菜館整兩個小菜。</p>
						<p>⋯⋯</p>
						<p>三天不多不少。</p>
						<p>我接到通知，我的核酸檢測出來呈現陽性，我要被隔離了。</p>
						<hr></hr>
						<p>女士們先生們，列車前方停車站湛江西站，請您提前做好下車準備。 </p>
						<p>
							我提起行李，準備下車。熟悉的車站，和往常一樣潮濕的空氣，卻沒有一點點家的感覺。我以為或許再也不會回到這個城市，但心裡認定不再依靠的親人，傳來了病危的消息，而童年的玩伴，姐弟倆都讓我回來看看，因為這可能是最後一程了。我不在的這段時間裡，他們家對我的母親也視如親人一樣，所以無論是人情還是親情都該報答了。
						</p>
						<p>
							好久不見！”姐姐還是一樣，隔著口罩都能感覺她的熱情，而弟弟也是一樣靦腆。因為目前的防疫政策，我需要居家隔離，而家裡因為母親入院，任何準備基本沒有。姐姐貼心地在當天為我買好了一些生活必需品和一些應急的食物，也答應我說每天都會來這邊做飯，畢竟居家隔離的我也不應自己下樓買菜。
						</p>
						<p>
							就這樣過了幾天，我的隔離生活非常苦悶，只有每天和姐弟吃飯的時間能有一點娛樂，其餘時候只能靠看電視劇和刷短視頻消磨時間了。這期間，姐弟們也有繼續前往醫院，成為了我和母親之間信息的橋樑。母親知道我回來了以後非常開心，情況也似乎穩定下來了。聽他們講，這個家沒有我以後就是空蕩蕩的，但母親一直保持著我房間的整潔，期待著我回來。姐姐在上班之餘，也不時給我帶回一些本地的傳統食物，都是兒時的味道。雖然被居家隔離著，但我自認為非常健康，不像是有被感染的樣子，大家也一起上餐桌吃飯了。還有兩天就可以去醫院看看媽媽了。
						</p>
						<p>
							無聊的兩天過得非常快，為了慶祝我明天就能走出家門了，做完核酸後我便用冰箱準備好的材料準備親自下廚，而弟弟也買來了奶茶。大家都吃得很開心，這個家可能很久都沒有過如此歡聲笑語了吧。
						</p>
						<p>
							深夜，我接到通知，我的核酸檢測出來呈現陽性，而姐弟兩人估計也可能遭殃。{' '}
						</p>
						<p>未來不可期，我要去隔離了。</p>
						<hr></hr>
						<p>“好的，我盡快回來。”</p>
						<p>
							電話的那一頭掛斷後，只留下空蕩的鈴聲。也許我從小就是在外公和外婆的護蔭下長大的，直到升上大學那一年，我選擇了出國，心中最為記掛的也還是西安城裡的兩位老人。而一場疫情，讓回家的路變得無比遙遠。一位老人的身體每況愈下，在和家人的那一通電話之後，讓我堅定了返程的心。{' '}
						</p>
						<p>
							長達兩個星期的隔離生活並不好受，心中的焦急在一人的夜晚被無限放大。與家人們再度見面，長輩們都更顯老態，時光是抓不住的沙子吧，我想。小時候，外公外婆總會帶著我坐公交車，去往城市各處。而現在，再次乘上公交車，到人民醫院，變成了未知的空虛，我不知道在醫院裏，我會看到什麼，我需要接受什麼。家人的身體曾經非常硬朗，但老人的健康有時就如同一場讓人措手不及的狂風驟雨，就像是多米諾骨牌一樣一面倒且不見轉機。顧不得那麼多了，疫情？疫情沒有我的家人重要啊！雖然我的理智告訴我，我年輕，也許不會那麼害怕這疫情，我也多次提出讓家裏年齡稍大的長輩們待在家中，避免在醫院中接觸到病毒的可能，但這又怎麼可能呢？一個家庭成員，一個生命，似乎要隨著看不見的時光流走了，大家都想要親自照顧。就這樣，在家與醫院來來回回的時間持續了一陣子，直到八月三十號。
						</p>
						<p>
							這一天的下午，醫生下發了病危通知書，在醫生護士們的搶救下，終究，是沒能從死神的手中拽回生命，生命定格在了晚上八點。但我們也知道，這或許是一種解脫。{' '}
						</p>
						<p>
							疫情期間，一切都只能從簡。我和其他家人在第二天買好了喪禮用的花圈和裝飾，殯儀館也已經安排好了。能到場的親友並不多，但也能感覺到口罩下各位都在真切地送別一位朋友，一位親人。漫長的一生，就以三天劃下了句點。
						</p>
						<p>
							一下子生活就顯得多了一處留白，我們也許是泥土的孩子，最後都會回到泥土的懷抱裏。而這時候，我收到了一個通知，我是無癥狀感染者，我要去隔離了。{' '}
						</p>
						<hr></hr>
						<p>
							退休生活也許是過於清閒了，尤其是在這疫情開始以後。我每天都會準時在早上八點前往家附近的菜市場，往常這裡都是人聲鼎沸：賣早餐的流動攤販，匆忙的上班族，忙著進貨的攤主，討價還價的攻防......這也是一天裡面能買到最新鮮的菜和肉的時候。隨著疫情開始，這些聲浪漸漸被掩蓋在口罩底下，連昔日的吆喝都仿彿小聲了些。大家都越來越謹慎，甚至是害怕與人面對面，生怕自己就成為密切接觸者，甚至感染上病毒。人潮也不如曾經那般，封閉式管理的小區，一定要使用智能手機才能調出的健康碼，老主顧們突破重重困難才能重聚這個小小的菜市場。
						</p>
						<p>
							子女在電話裡也不斷提及，老人免疫力差，最容易受到成為感染的目標。我也一把年紀了，不愛到處走，就喜歡趕個早，感受一下人來人往，順便照顧已經熟絡的老闆們的生意，也算是活動一下這把老骨頭。做完了核酸，回到家裡，可就只剩下一個退休老人，普普通通的家務活，對著電視機的閒聊，粗茶淡飯，飯後散步。也許談不上多美好，可平平淡淡才是真。如果這也能夠感染上病毒，可能這就是命吧。
						</p>
						<p>一大早，電話響了，我收到了通知，我是陽性，我要去隔離了。</p>
						<hr></hr>
						<p>
							我在這座城市已經生活幾十年了，但遇到這麼大的陣仗還是第一次。我勉勉強強跟上了這個人人都需要拿著手機的時代，而現在沒有一臺手機，或許連小區門口都進出不了了。離退休管理中心裡的老朋友們大部分都沒法適應，也沒有餘力去折騰這臺手掌上的小機器，畢竟上面的字可能已經小到大家都無法看清了。儘管如此，我們還是幾乎每天都會相聚於此，不為別的，這幾年以來的生活談不上正常，或許大家都寧願苦中作樂，也不願再在家中獨自一人。冒著風險見見朋友們，或許談天說地，或許一起喝點好茶，也都比這些天在家裏被反覆提醒我們已經與社會脫節要強。
						</p>
						<p>
							而最近做核酸的次數也越來越頻繁，已經是一天一檢了，但每一次核酸時，鼻腔裡面的異物感依然沒有變化。除此以外，每天的生活或許就只有菜市場和閒暇時間在小區的公園裡面稍微活動一下。相比於別的地方，人都被關在家裡，我們這還能自出自入，實在是不幸中的萬幸。
						</p>
						<p>
							然而昨天收到通知，我確診了，我要去隔離了。只是希望我的老友們，都能安好...{' '}
						</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							疫情發展至今，我一直相信只要保護措施做好，病毒就感染不上我。手套，口罩，隨時的酒精消毒，已經是標準的配備了。為了生計，工作自然是不能夠停下，唯一能讓心裡舒服點的就是這些保護，無論對家人還是員工都是。農貿市場雖然不是人頭湧動，但明顯也稍有起色。和老闆商量好，給我店裏準備好新鮮的食材明天送到，一如既往，我的信條就是有準備就能應對各種情況，做菜是如此，疫情亦然。
						</p>
						<p>
							今天從員工口中聽到了一個說法：測核酸的隊列裡才是最容易感染的。乍一看荒謬無比，但仔細想像卻讓人內心發寒。即便我怎麼全副武裝，在面對「大白」時還是要脫下口罩，百密一疏。或許這是真的，也或許只是坊間無聊的流言。太多的或許了。
						</p>
						<p>
							可惜我或許不需要再思考這些了，即便我有所準備，即便我萬事做足，我還是感染上病毒，成為了陽性病例，我要去隔離了。{' '}
						</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>{' '}
								</li>
							</ul>
						</span>
						<p>
							暑假馬上要結束了，可由於疫情，開學時間來來回回地更動。可能沒有人在乎這個，甚至有人會因此竊喜。在家的日子，電視，手機，電腦，這三件套充盈了我的生活，儘管我所在的小區沒有被封禁，然而不時發現的陽性病例還是讓我和我的家人減少了出門次數。在家能和朋友們打打遊戲，聊聊天，但也好久沒有和他們一起去打球了。或許我會非常期待新學校，也或許會為假期的結束而感到懊惱，還有動都沒動過的暑假作業。還是不要思考那麼多比較好，這還不如來兩把遊戲呢！
						</p>
						<p>
							雖說一直都留在家裡沒有出門，可按照政府有關部門的要求，我們還是有在定期地進行核酸檢測，或許是兩天一次，也或許是一天一次。新聞上都說了，這些可恨的病毒現在對老人小孩是最嚴重的，而我的身體好著呢，或許得上了也只會是輕癥。只是很多時候，也會回想到兩年前和朋友們一起外出，一起去奶茶店，一起逛書店，一起去遊戲廳的時間。這兩年來，我們仿彿習慣了什麼東西都往網上走，上網課，上網打遊戲，看視頻，聽歌，很多時候都覺得生活不太現實，而現實起來卻又讓人覺得不習慣。
						</p>
						<p>
							終於，教育局發下了通知，下週就能開學了，而我還在沈浸在放假的慵懶當中，虛虛實實直到暑假作業做不完了才開始覺得精神緊張。我也許能遇上新的同學，還能有新的老師，新的學校，可能全部都是嶄新的。也有可能會是抱著沈重心情，準備面對一年比一年緊張的課業，但我也會因為和朋友們再度面對面談笑而覺得開心。可能這還會是我的最後一年，面對更加不明朗的未來憂心忡忡......
						</p>
						<p>
							虛虛實實，但一通電話把我扯回到了現實，我確診了，我要去隔離了，假期又開始了。{' '}
						</p>
						<hr></hr>
						<p>
							一場疫情，讓我們這些餐飲業者難上加難。我或許是已經紮根數年，被疫情套牢，只能勉強維繫著生意。亦或是想在衰退的市場裡面抄底，與自然進行一場豪賭。無論怎麼樣，封城已經結束，應該都會越來越好了吧？人們已經開始慢慢走出家門，我在政務中心裡面也已經排起了隊。事情辦好以後，再開車來一碗許久沒有吃上的羊肉粉，味道沒有變，但堂食就是比外賣要好吃得多。在超市，或許人們不再像之前一樣瘋狂囤貨，但還是下意識的會多買一點，不怕一萬，就怕萬一。晚上再和老友們去整一頓燒烤，啤酒烤串下肚，早就忘了上一次這樣吃是什麼時候了。
						</p>
						<p>
							很多時候我都在想，這樣子的生活才是大家想要的。大口吃肉，大口喝酒，食客們吃得開心，我們掙錢也掙得開心。無論網絡如何發達，如何便利，就是沒有辦法取代三五知己一起在飯桌上舉杯的快樂。大家脫下口罩，一起呼吸新鮮的空氣，感受食物的香氣，什麼時候才能回到這種生活呢？
						</p>
						<p>只能說，還不是現在，我被通知確診了，我要去隔離了。</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							秋風是一年快要過去的征兆。我這兩日一直在家中待著，並沒有出門的打算。平凡日子，無非就是在家裏找點屬於自己的娛樂，我可能在陽臺上養了一些花草，在客廳裏有一個魚缸，照料著這些與我不同的生命。我或許會在家裏閑暇時打開電視，觀看一部電影，給自己做一頓飯。就這樣過了兩天，外面的世界對於我來說似乎並不具有那麼多的吸引力，我希望把我的平凡日子過好，繼續平凡著，別無所求。就跟你一樣。偶爾我會在吃膩了自己做的飯的時候，想著去外面尋找一些不一樣的食物。“吃什麼呢？水煎包吧。”平凡人的生活樂趣在很多時候是來自於食物的慰藉，踐行我的人欲。疫情三年了，做核酸已經成為了我的日常。這總沒有什麼壞處吧，核酸檢測能讓我遠離得病，能讓我有繼續我的生活的證明。不知道得了這個病是什麼感覺，也許這確實是很危險的疾病，我們都害怕得病。畢竟得病了可能需要去進行很長時間的隔離，我可不能離開家裏，家裏的花草還需要我照顧，無人居住的房子在幾天後就會落灰。
						</p>
						<p>
							買食物之前，我還是先去做一次核酸檢測好了，很久沒有做過了，我也許過幾天需要出遠門，也許有的地方會讓我提供四十八小時核酸陰性證明才會讓我進去，反正我可能需要這個檢測結果。政府在這方面還是做的不錯的，至少我的核酸檢測是免費的。做完了核酸檢測，買到了我想吃的水煎包，是時候回家了。通常我會在二十四小時之內收到我的核酸檢測結果，今天就在家裏放松一下吧，做做家務，在家裏尋找一些屬於自己的樂趣，或許我的生活中還有一些讓我顧慮的事情？我會在夜裏做夢，也許和你一樣，在睡著之前打開手機看看有趣的視頻。也許和你一樣，我並不是那麼容易入睡，會在睡著之前輾轉反則。也許和你一樣，我是一沾枕頭就睡著的人。也許和你一樣，我喜歡和我的家人共度一些家庭時間。{' '}
						</p>
						<p>睡著了，夢也許還是一樣的甜美。</p>
						<p>
							睡醒了，太陽出來了，我收到通知，昨天去的水煎包店似乎有一個陽性病例去過，通知裏告訴我說我應該要多做幾次核酸檢測，這沒什麼，為了確保萬無一失，這是為了我的健康。但是在同時，我的心中有一些顧慮，萬一我被傳染了呢？我是不是就要去隔離了？對於這一次的核酸檢測，我有點猶豫，我不確定我是否應該去做這一次核酸檢測。“還是去吧。”我對自己說，應該不至於那麼容易被傳染，而且我也沒有感覺到什麼癥狀不是嗎？於是，我又去做了一次核酸檢測。接下來幾天都要做檢測呢。回家等候結果好了，我想回家，這疫情真是可怕呢，我不應該到處亂走了，要是我那天沒有想吃水煎包，我也不至於遇到陽性的病例，接下來幾天也不用每天都去做核酸了。沒有辦法，日子還要繼續過呀，先回家做做我自己的事情，等後面這幾天的核酸檢測都做完應該就好了吧。這幾年的疫情真是糟心，我看很多人都選擇待在家裏了。
						</p>
						<p>
							新的一天，新的核酸檢測，我還是不知道我的核酸檢測結果是什麼，很快就會收到通知的吧，是綠色的二維碼，還是黃色的二維碼，亦或是紅色的二維碼呢？其實我覺得這顏色的設計確實是直觀呢，綠色，跟綠燈一樣，我的正常生活還是能正常的進行下去，黃色，跟黃燈一樣，一切都會變得略微緩慢，略微不便，紅色，跟紅燈一樣，是我的生活的暫停鍵。你難道不覺得很有趣嗎？當你的生活可以和機器人一樣，因為程序在屏幕上展示的信息而被控制。哈哈哈，我有時候會覺得這是有趣的，似乎我的生活是可以真正被暫停的呢。我害怕我的生活被停下來，我知道這也許沒有那麼糟，但是我不想我的生活就此停下來，我不想別人停下我的生活，你會願意嗎？在今晚入睡前，我是否應該做好明天我的核酸檢測報告是陽性的準備呢？我不知道，沒有任何的征兆在告訴我明天應該怎麼辦。先睡了吧，普通人無法預測未來的事情，我似乎沒有選擇，如果我的檢測報告是陰性的，那我就繼續我正常的生活，如果我的檢測報告是陽性的，我就必須要去隔離。我看似有選擇，但實際上並沒有選擇，不是我在決定我應該怎麼樣去生活，也許是這種病決定我應該如何去生活。
						</p>
						<p>
							我要去隔離了，沒錯，我大概料到了我的檢測結果會是陽性的，去隔離吧，無非就是那麼十幾二十天，也許？對了，你為什麼會看見我的生活呢，我們認識嗎？
						</p>
						<hr></hr>
						<p>
							我已經在過去兩天都連續做了核酸檢測了，他們說，我的城市的疫情在這段時間特別嚴重，是啊秋天到了，從前兩年就好像有聽到身邊的在說，當秋冬季節來臨的時候，這個病毒的傳播速度會更快，範圍會更廣。我還是相信這樣的說法的，因為這疫情總是反反復復，一波一波地來，好像確實是到冬天的感染人數更多呢？我早就已經習慣性地去做核酸檢測了，那無非就是走個過場罷了，反正我去了那麼多次，都沒有被測出過陽性，感染的機率也許沒有那麼大吧。我也沒有聽說有誰是因為在做核酸的時候被傳染的，盡管每次做核酸的時候都是很多很多的人聚集在一起，但是沒有關系，陽性的人總是在少數吧。
						</p>
						<p>
							今天終於可以消停一天，不用再去做核酸了，畢竟前兩天都連續做了，結果都是陰性。我今天應該要去市場買一些食物帶回家。我應該好好在家裏做頓飯，似乎家裏剩下的做菜用的油也不多了，確實應該是去市場購物了。我也許要替我的家人購買一些東西，我也許想給我的孩子做一頓豐盛的晚飯吧。我很高興，我可以去市場買到我想要的東西，我很高興，我可以在家自己做一頓豐盛的晚飯。你問我在高興什麼，這不是我最普通，最日常的生活嗎？確實，我好像被你問倒了，我也不知道，我也不確定我在高興著什麼。不知道為什麼，在疫情開始以後，我覺得我應該珍視我的日常生活呢？也許我應該珍視的是，手機裏的那個綠色的健康二維碼，是它保證了我的生活能正常地運行啊。夜幕降臨了，隨著冬天的接近，現在天黑得似乎一天比一天要早了。早些休息吧，剛才又接到了通知，說明天還是要去做核酸檢測呢。
						</p>
						<p>
							核酸檢測似乎只是我生活中的插曲，我們村裏有很多電動自行車，每天都在安靜地運行著，跟隨著駕駛員，或去這，或去那。快沒電的時候，電動車就要在家裏充電，偶爾的充電，並不影響電動車的使用，路上偶爾有一個小坑，電動車也能很輕易地通過。似乎這些都是電動車穩定運行的插曲，只有伴隨著這些插曲，電動車的運行才能流暢且不間斷。核酸檢測就當是給我充電了吧！大家多做幾次核酸，疫情就會沒有啦！又連續地再做了兩次的核酸檢測，這一次，我似乎沒有那麼幸運了，我是陽性的，我要去隔離了。
						</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							我這幾天都沒出門，我只為了核酸檢測而出過門。我在過去的兩天裡都堅持去做核酸檢測了，而今天我是第三次。我在中午回來以後，在家裏吃個簡單的午飯，在下午的時候，我的家人叫我去把家裏的垃圾丟一下，我們這裏的垃圾場在村子的最邊緣，所以每次過去都要走一小段路。我其實挺喜歡走去垃圾場的這段路的，我能在這路上看看風景散散心，和村裏認識的鄰居打一下招呼。雖然有的時候有人會跟我說，我們村應該改一改垃圾場的位置，或者收垃圾的方式，因為當我下午走過去的時候可能還好，但是晚上，尤其是冬天晚上，走過去是真的有點黑，有點冷呢。明天我應該在家裏休息一下，已經連續做了三天的核酸檢測了，我感覺應該不會有什麼問題了，終於有一天是不用進行核酸檢測的了。我應該幹點什麼好呢？
						</p>
						<p>
							我收到通知了，我的核酸檢測結果出了，我是陽性的，我要去隔離了。
						</p>
						<hr></hr>
						<p>
							我在村裏已經住了好多好多年了，鄉下的生活是安樂的，可以遠離大城市的喧囂。我的工作就是在自家的農田裏耕作，你說這是快樂的嗎，還是你覺得我一成不變的生活有點無聊呢？疫情以來，村裏一直要求我們在去做核酸檢測。這幾年來，似乎我的生活被改變了一些？但是似乎又沒有那麼多的改變。我聽見有人說過，核酸檢測就像我們生活中的插曲，也就十分鐘的事！並不非常影響我的生活吧。我通常在早上醒來，和家人吃個早餐，餵我的狗，就迎著朝陽去我自家的農田裏幹活了。你問我這是不是我的父輩傳給我的土地，我不是很確定，但是我確定的是，這是後來分的土地。有一片農田可以進行耕作，想種什麼也許是我的自由吧。我工作到中午，烈日當空的時候，就開始休息，簡單地吃點東西。下午就去村口和我的朋友們見見面，我們或打一下牌，或聊聊天。直到夕陽西下時再慢悠悠地聞著各家開始做飯的味道回家。聽說，好幾千年以來，人們都一直過著日出而作，日落而息的生活。我每天都挺享受晚上的時光的，在村子裏，夜晚特別靜，特別靜，沒有城市裏喧囂的車水馬龍，可能有蟋蟀的叫聲，可能有青蛙的叫聲，可能可以聽見隔壁房子傳來小孩的嬉笑，直到月亮完整地掛在天空的正中間，一切聲音漸漸熄滅，我進入夢鄉。
						</p>
						<p>
							日出而作的我醒了，我收到了一個通知，我是陽性的，我要去隔離了。{' '}
						</p>
						<hr></hr>
						<p>
							我住在小鎮上一家珠寶公司裏，我可能是這裏的員工，你猜呢？我在從學校畢業以後，就開始在珠寶公司工作，我家住在不近的地方，為了節省我每天上班的通勤時間，我選擇住在公司裏。其實作為一個珠寶公司，每天晚上有人留守也能保證庫存的安全，在很多時候，我都選擇在公司裏上夜班，在上班的同時，我又可以尋得一個供我夜間休憩的地方。我雖然在生活中的大部分時候都居住在珠寶公司，但是我每天還是會有不同的地方需要我去。例如今天，我正準備去家附近拜訪原本和我是來自於同一個村莊的朋友。我也算是剛好得到回家看看的機會吧。工作，讓我獲得工資，工資，讓我養活我自己和我的家人。偶爾還是要回家看看。我在村裏待到凌晨才開始慢慢地回去珠寶公司，不知道從什麼時候開始，珠寶公司已經成為了我生活中很重要的一個地方，一個休息的地方，一個工作的地方。我在珠寶公司待到第二天的下午，然後再去一下村裏。這個村莊是我長大的地方，我的生活似乎被分割成了兩個部分，工作和居住是一個部分，娛樂和放松是另一個部分。在兩個地方過著兩種不同的生活。你說我的生活快樂嗎？我有時候會覺得我的生活是美好的，也有的時候我直視生活的平凡。今天也是與昨天一樣，我凌晨從村裏開始回去公司，打算在公司度過我的夜晚。對了，我忘了告訴你了，我很喜歡在回到公司之前去外面買一份吃的，我似乎不太在意夜宵是否是一個健康的選擇，今天晚上，我選擇吃一份鍋貼。
						</p>
						<p>
							日子還是一樣的，我會在第二天下午回到村裏，我有時候會好奇，我的工作和我的生活是否真正分開了，我似乎只是有兩個不同的居住地，但是我不知道哪裏能稱之為家。我把我夜晚所待的地點稱之為公司，也許只是因為我的家人不在那，我熟悉的鄰居不在那，只有我一個人在。要不是為了那熟悉的景象，熟悉的人，我都快分不清哪裏是我的家了。你可以說我過著一成不變，枯燥無味的日子，日子是在一天天的循環中度過的，但是我想問，在這個社會中，有多少人不跟我一樣呢？我問的是百分比。
						</p>
						<p>
							好久沒有吃燒豬肉了，還有讀書時愛吃的重慶小面。因為我一直在凌晨上班前才去買吃的，那個時候有很多店鋪都關門了，今天下午我正好要去超市買一些日用品，我決定在去買日用品的路上，順便把今天的食物給買了。買完東西，距離上班還有一段時間，我再次回到村裏，和家人聊聊天，看看村裏的景象，也許這一切也沒有你所想的那麼有趣，只是生活的正常一部分。凌晨上班前，我還是忍不住去買了一份鍋貼，我很喜歡這家小店做的鍋貼，首先是很方便，離我的公司很近，嘗起來味道也很好，價格也是相當公道呢。買完鍋貼，我想起來公司似乎少了一些辦公用品，我只好再去一次超市。買完東西，我就回到了公司，待到中午，回家前在便利店買了一些食物，簡簡單單的算是一個午餐了吧。好不容易是個周末，周日我不用上班，在村裏待到傍晚，我決定去買些晚飯，市場裏有一些快餐小攤，我周末的晚飯就在這裏解決好了。吃完飯散散步，逛逛超市，想想家裏還需要什麼。晚上的村裏還是那麼安靜，你說，是不是大多數村莊都跟我的村莊一樣，都有一個寧靜的夜晚，人們都喜歡在村裏慢慢散步，享受片刻的閑暇。
						</p>
						<p>
							你問我關於疫情的事嗎？我不知道呢，我的生活如此規律，我的健康二維碼一直是綠色的，也沒有去做核酸檢測的打算。我覺得我應該不會得這個病，沒聽說身邊有什麼人得了病。好好享受一下我的周末吧，工作日開始後，又要開始上班了，日子會進入一樣的循環嗎？
						</p>
						<p>
							今天，他們叫我去隔離，我並不覺得我得病了，但他們說，我與一個得病的人有過近距離接觸，我要去隔離了。你看了我的生活以後，你覺得這打破我生活循環的舉動，是應該使我開心嗎？應該使我難過嗎？我不知道呢，一段時間的空缺，只讓我意識到我的生活被按下了暫停鍵。
						</p>
						<hr></hr>
						<p>
							我每天都要去學校，去我們城市裏的初中，你問我我是去上班還是去上學？我不知道，但這有實際上的分別嗎？我們去的地點都是類似的，我們的每日軌跡都是類似的。我每個工作日在起床以後就去學校，直到放學。放學後的生活，無非就是直接回家，或者在回家的路上買些小吃，在便利店買些飲料或者日用品。直到第二天再去學校。還是跟往常一樣去上學，今天學校裏發生的事情可能也發生在過你的身上。我放學後回到村莊裏，去了親戚家吃晚飯。明天按照計劃來說，應該又是繼續去學校的日子。但是當我起床的時候，他們說我前天去過的小吃店，有一位陽性患者去過，所以我作為密切接觸者，我也應該去隔離。看來要暫別我的學校了，暫別我的規律生活了。我得到了一個不知道期限的假期，你說我應該開心嗎？我在回想著，那天我是否應該去那個小吃店，如果沒有去呢？不知道呢，反正現在，我要去隔離了。
						</p>
						<hr></hr>
						<p>
							最近的疫情是如此反復，我早已聽說了很多人又重新開始得病了。我不知道我會不會是下一個，如果我是下一個的話，我會遇見什麼呢？我們產生的交集，是以一種什麼樣的方式產生的，我們去過相同的地方嗎？我們擁有類似的生活嗎？不知道呢。在這個周末，我覺得我應該為家裏買點東西，所以我去了隔壁村的百貨商店，周末出門逛逛總是我們最熟悉，最輕松，最多人選擇的放松方式，畢竟不但可以去看看需要的商品，還可以享受一下美食。我知道在百貨商店附近，有一家非常不錯的小吃店，我經常光顧這家店，首先是因為他們家做的東西味道確實很好，價格也非常實惠，並且離我家也不算太遠。我最近似乎感覺有點不舒服，但是我並不覺得我得了現在正在流行的那種病，畢竟我一點相關的癥狀都沒有呢？可能是慢性病吧，我在下午的時候要去我們市裏的醫院看看，找醫生拿個處方，去藥店抓點藥也許能讓我好受一點。自疫情開始以後，身體只要有點不舒服我便會覺得有一些害怕，害怕自己得病，害怕自己被隔離。回家前，我還是選擇在外面隨便吃一些好了。晚上的閑暇時光與他人別無二致，無非就是在家裏放松一下，你問我有沒有夜間的娛樂生活？我可能有過，但是我最近沒有，也許我需要一些快樂的活動，也許平淡的普通生活就能讓我得到滿足。
						</p>
						<p>
							當太陽再次升起的時候，洗漱，吃早餐，出門做核酸檢測。我不知道別人怎麼看待核酸檢測的，我不知道我是否從心裏厭惡核酸檢測，或者它並沒有特別困擾我的生活，畢竟每一次做核酸檢測也不需要很久的時間，但是最近似乎聽到有人說做核酸檢測時候的人群聚集會讓這個病傳播的更加快速。我也不懂了！畢竟這是我生活的安排！我被安排的生活！做完核酸檢測，我順便去了一趟超市，買了一些吃的，今天下午我打算去做一個頭髮，所以中午就在超市隨便吃一些就好了。我對我的新髮型很滿意，理髮師一直從下午弄到晚上，又到飯點了，你說，人一天能做多少事呢？回家前，我在外面買了一些吃的，順便又去便利店帶了一些零食回家給我的晚輩吃，周末就在平淡，忙碌，悠閑，充實的時光中過完了。
						</p>
						<p>
							今天是星期一，按照一般來說，我要送我的孩子去上幼兒園，但是今天因為我早上要去做核酸檢測，所以我就讓另外的家庭成員去送了。我下午才去接孩子放學，帶著孩子買買零食，買買吃的，逛逛超市，順便給家裏買好晚飯所需要的食材。一家人的晚餐，或平常，或溫馨。
						</p>
						<p>
							星期二一大早，我就收到了通知，他們跟我說，我是密切接觸者，我要去隔離了。
						</p>
						<hr></hr>
						<p>
							哈哈哈，你問我關於我的生活嗎？什麼？你沒有問我，你自己看的？好吧，你也能看到我這一周的生活是什麼安排了，確實有點難以形容呢。我哪裏也沒去，但是我做了四次核酸檢測。我也許只是一個普通的上班族，為數不多的生活樂趣就是每天在晚飯後在家附近散散步。最近可能是公司有要求，也有可能是社區有要求，反正我連續做了四天核酸檢測，在他們告訴我我就要去隔離的時候，我也沒搞清楚我是什麼時候得上這個病的，我不知道，因為我確實沒有任何得病的感覺。你說有沒有可能會是核酸檢測的時候那麼多人聚集造成了我被傳染呢？我是真的不明白呢。反正有可能是我自己散步得的病，也可能是我上班得的病，這都不重要了，反正，我要去隔離了。
						</p>{' '}
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							我是一個普通的上班族，我的工作是一名珠寶銷售員，疫情以來，我們店鋪的生意確實受到了一些影響，但是我還是得每天堅持去上班，包括周末。其實這也不奇怪，通常來說周末來購買東西的人更多，店裏更忙。你問我生活有什麼特別的嗎，我想大概是沒有的，每天都是上班，回家，兩點一線的生活。真要說有什麼獨特的，就是疫情開始以後，有時需要在回家之前去做一下核酸檢測。我已經這樣堅持三年了，我有時候會覺得我是幸運的。因為這三年來，我看過太多的店鋪倒閉，太多的人失去工作。或許我確實是幸運的，天知道我這些年來到底做了多少次核酸檢測，但是我堅持三年了，我從來沒有成為不幸的人，我從來沒有得過這個病。今天還是在回家之前做一下核酸檢測，順便去商場買點東西，也是順便想看看商場裏的珠寶，這是我為數不多的興趣之一了。沒有特別的生活，沒有特別的晚飯，我在睡下前，也許會想著，明天還是一樣的循環。但是當我醒來的時候，就有人通知我，叫我待在家裏不要動，有人會來接我去隔離。盡管我沒有任何的感覺，但是我大概還是得了這個病了。行吧，三年了，我夠幸運了，現在，我要去隔離了。
						</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							又是一年國慶節，也和這兩年來一樣，這個假期我沒有選擇外出，今年甚至都沒有想要出門和朋友吃飯喝酒的沖動了。我只想享受一刻的清淨，一刻不需要被體溫槍命中額頭，一刻耳朵上不用掛著這薄弱而又關鍵的防護。開開心心地屯糧，無止境地煲劇，隨心所欲地入睡，簡直是個完美的假期。
						</p>
						<p>這幾天來，我的外出只有去做核酸這一項。</p>
						<p>好幾次都是陰性。</p>
						<p>（幾天後）</p>
						<p>電話響了，</p>
						<p>我收到了通知，</p>
						<p>我，</p>
						<p>是無癥狀感染者。</p>
						<p>簡直是個完美的假期。</p>
						<p>我要去隔離了。</p>
						<hr></hr>
						<p>
							匆匆的假期，最後的一天我決定和長輩去拜訪許久沒見的親戚，互相關照總是好的。見到大家一切安好，他也放心了。長輩操勞一生，腰一直不好，而家樓下的中醫診所總能有奇效。難得出門，讓大家盡情享受吧。
						</p>
						<p>
							假期的余韻，約了三五好友，溫泉、公園，玩玩水，重溫草地的味道。{' '}
						</p>
						<p>
							旁邊的小孩笑得很開心，而這時候，我收到了一個通知，我是無癥狀感染者，
						</p>
						<p>家中長輩也是。</p>
						<p>我們要被隔離了。</p>
						<hr></hr>
						<p>
							一點了，下午一點，離上班又近了一天。家裏的食物快吃完了，希望樓下超市還能有一點新鮮的肉和菜。我是做電子商務的，這個疫情不得不說讓公司業務變得好了起來，人人都在家看著手機，沒有比這更好的機會了吧。
						</p>
						<p>
							什麼？實體經濟蕭條？能怎麼辦呢，我們的錢，我們的交流，現在可都在這個小屏幕上了呀。盡管說我是個投機者吧，搞錢就好了。實體經濟就是運氣不好，選錯了起跑線，這或許就是命運吧，成王敗寇，等我頓頓吃上大龍蝦再來憐憫也不遲。現在我這粗茶淡飯，湊合過吧。
						</p>
						<p>
							又是上班的一天，朝九晚六，從家裏來回通勤一個半小時。從前裝成好學生，現在裝成好員工。可能是上班第一天吧，莫名有點累。
						</p>
						<p>半夜，電話裏說我確診了，我要去隔離了。</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							商場裏的人完全不像以前那樣多了”這一年多以來已經聽大姐說這句話不下數十次了。這能有什麼辦法，人們都習慣被困在家裏了！“過段時間就會好啦，人不是越來越多了嗎？”二姐也總會有一樣的回答。大姐家裏可能有一個剛上小學的小孩，而二姐可能剛剛結婚，我則可能剛從大專畢業。為了生計，相聚於這個化妝品櫃臺。據大姐說，國慶假期原本應該是銷售的小高峰，然而現在不多不少的人流，再加上人人臉上的口罩，我們櫃臺已經好一段時間沒人光顧了。
						</p>
						<p>
							這樣倒也清淨，工作也不難，大家還能一起說說話，不會顯得苦悶。聊聊生活，聊聊大姐的小孩，聊聊新婚的喜悅，聊聊明星，聊聊就業......時間一下子就過去了。每天的核酸我也能順路去一下超市和商店，買點小零食來堅持到十點關門。
						</p>
						<p>
							我原以為一切都會平靜度過，直到我接到通知，我是陽性，而大姐和二姐也被認為是密切接觸者，大家要去隔離了。
						</p>{' '}
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							學校的老師告訴我們呀，要多洗手，注意衛生。我不知道你是否很難想象這個疫情占了我目前人生的多大部分，因為我比你小得多。你還記得你上幼兒園的時候嗎？那也許是好多好多年前的事情，我想的可沒有你們這些成年人那麼多！我們或許會在幼兒園學唱關於疫情的兒歌，老師也許會告訴我們穿著防護服的都是英雄，偉大的英雄！你在小時候是否也會以偉大的英雄為榜樣呢？其實幼兒園的生活也沒有成年人想象的輕松啦，父母把我們送到幼兒園去，是為了讓他們在上班的時候有人照看我們吧。今天還是跟往常一樣，一個普通的星期四，我還是要去幼兒園上學。我或許不舍得離開家裏，我或許期待著見到我的小夥伴們。但是我今天感覺有點不舒服呢。我跟爸爸在家樓下吃過早點，爸爸就帶我去幼兒園了。我見到了老師，老師發現了我不太舒服，便讓我爸爸來接我回家。老師也很緊張，很怕我是一個陽性病例吧。我跟爸爸回到家以後，感覺一會好一會差的，在家裏待了一會以後，似乎又沒那麼難受了。大家說我這種癥狀可能是因為早上吃壞肚子了？我也不懂啦！我下午又回到了幼兒園，直到爸爸下班才能來接我。到晚上，我似乎感覺更加糟糕了，爸爸認為我是感冒，但是他說，為了安全起見，還是去附近的核酸檢測點做一下核酸檢測吧。晚上十點了，我很想睡覺，可是爸爸還是帶我去做核酸檢測了。
						</p>
						<p>
							做完核酸檢測以後，我感覺似乎越來越糟，我也許會咳嗽，也許會發燒，在接下來兩天裏他們告訴我要乖乖的待在家裏，哪裏也不要去。我聽說有好多大人都要去隔離，我是不是也要去隔離了呢？我也許沒有你們這些大人那麼在乎隔離，因為爸爸跟我說，去隔離的話就不用去幼兒園了，我可以每天看電視！
						</p>
						<p>
							第二天，爸爸跟我說，我的核酸檢測結果出來了，他跟我說，我要去隔離了。你說我是不是應該開心呢，我可以在接下來好幾周都不用去幼兒園了，可以看我最喜歡看的電視節目。但是，我也有點想念我幼兒園的小夥伴們呢。{' '}
						</p>
						<hr></hr>
						<span className="maps">
							<ul>
								{' '}
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
								<li>
									<img
										src={
											new URL('../assets/img/chengdu.png', import.meta.url).href
										}
										alt=""
									></img>
								</li>
							</ul>
						</span>
						<p>
							我是一名衛生紙銷售員，在超市上班。我的生活沒有什麼特別的，跟我身邊的大部分人都一樣。在我們超市，每天都有三批人進行輪換，我有時候上早班，有時候上晚班。我每天工作八個小時，生活還算規律，我的工作內容對你來說也許也不算太難。我今天下午六點下班以後，就開始走路回家，有時候我也許也會感嘆這個城市的繁華，看著下班時在歸家路途中行色匆匆的人們，我也許也會跟你一樣，好奇每個人的生活。我回家的時候經常會偶遇我的鄰居，我們每次都會友好地聊會天，分享一下我們的一天，我友好的鄰居有時候也會在我生活中遇到困難的時候幫助我，你說我應該為這有鄰裏互相照應的生活感到滿足嗎？吃一頓簡單的晚餐，結束普通卻應該使我滿足的一天。
						</p>
						<p>
							第二天，今天我上早班，和晚班。我早上七點半就要到超市準備今天的工作，直到中午十二點我才下班。有時候我覺得這樣的上班安排也蠻好的，因為我還有好多屬於我自己的時間，可以在晚上上班之前做做家務。我打算下午回家休息一下，在回家的路上，我看到了路邊水果攤的水果非常新鮮，我買了一些水果，想著回家與我的家人一起分享。啊，我突然想起來，我的女兒跟我說她需要一些文具，水果攤旁正好是一個文具店，可以順便幫我女兒帶一些文具回家。幸好我想起來了，不然她都做不了作業呢！下午六點，我又要去上班了，晚班晚上十點下班，我在上班前簡單吃點晚飯，畢竟下班後也沒有什麼時間了。
						</p>
						<p>
							真要問我這個工作有什麼缺點，那可能就是周末也要上班，畢竟超市沒有理由在周末關門不是嗎？這個星期六，我上的是晚班，所以我早上有一些自己的時間。我打算去購物，給自己買一些東西。在商場我也許買了幾件衣服，也許買了一些裝飾品，也許為家裏買了一些有用的東西，我一逛就逛到下午，購物之後，我就要去超市上班了。超市的工作每天都讓我和不同的人打交道，說是不同的人，但其實大多都是住在附近的街坊，你說大家的生活真的會有很多不同嗎？晚上下班了，我要跟我的兩個女兒去做核酸，做核酸的地點還有點遠，我們還得打出租車。一下子又弄到快午夜了，直到晚上十二點，我才能結束我的一天，你說我這一天，是忙碌，還是充實呢？
						</p>
						<p>
							我跟我的鄰居約好了一大早去市場給家裏買菜，鄰居和我年齡相仿，也有家人需要照顧。我們希望早點去市場，能買到最新鮮的食物。我在買菜的時候接到了一個電話，說是昨天我們的核酸結果出來了，我們很有可能是陽性，需要馬上再去測一次核酸。
						</p>
						<p>
							我只好回家，帶上我的女兒一起去做核酸。核酸檢測站也太多人排隊了，簡直是人山人海。我讓我的女兒排著隊，我去給我們買點吃的回來，好讓我們可以吃點東西，我們今天都還沒有吃早飯呢。一直排隊到接近中午，我們才完成核酸檢測，今天我也不再打算出門了，回家休息吧。跟家人簡單地吃個晚飯，我也許會看看電視放松一下，也許也會有很多家務事要忙。正當我準備睡覺的時候，晚上剛過零點，我收到通知，說我的核酸結果是陽性的，他們叫我待在家裏不要動，現在就會有人來帶我去隔離。我要去隔離了，家裏剛買的菜怎麼辦呢？
						</p>
						<hr></hr>
						<p>
							開學已經一個星期了，我這幾天都起了個大早，但媽媽永遠都會在我之前醒來，準備好早餐。上學的路上我或許能夠遇見幾個同班同學，這樣我們就能結伴一起去學校了。學校的路並沒有特別遠，路上能看到很多早餐攤熱氣騰騰，看起來非常好吃，也能看到其他家長送他們的孩子上學，我也想有一天爸爸能開著小汽車送我，這樣我就能搶在其他人之前到學校了。雖然現在大家都能一起到學校裏面上課，可我們依然需要帶著口罩，媽媽也叮囑我說不能隨便摘下口罩，也不要在上課的時候吃零食，可我還是能看到有些同學會這樣做。因為是新學期的開始，所以老師們都沒有安排很多作業，而新的教科書上面的內容我同桌說她都會，我反而是看得一頭霧水。
						</p>
						<p>
							很快上午的課就結束了，而我和朋友們約好，吃完飯以後一起去學校旁邊的文具店買新文具。爸爸也為了讓我好好學習，決定贊助我一百塊，足夠我買文具盒、包書皮和再來一本最新的漫畫書了。文具店裏也進了很多新東西，只是結賬的隊伍真的很長很長，真是等不及了。回家以後，爸爸媽媽和我一起整理了書包，書包小小的，但是卻很重。一點多我又前往了學校，開始了下午的課。下午的課往往都是最困的，感覺連老師也提不起精神。晚上十點，爸爸媽媽帶我一起做了核酸，這一年多以來都是如此，但是我還是很不喜歡被棉簽捅到鼻子，非常不舒服。連續兩天都是這樣過的，時間是不是真的變快了呀？
						</p>{' '}
						<p>
							周末，爸爸媽媽各自帶我去做了一次核酸。但是晚上，媽媽接了一個電話，看起來非常驚慌。凌晨一點就有幾個穿著防護服的人來來敲門，爸爸媽媽和我都被他們一起帶走了。在隔離點我們呆了四天，我很掛念我的書包，我的文具，吵吵鬧鬧的教室。我的身體沒有不舒服，但是今天也測出來我是陽性了，我要去隔離了。
						</p>
						<hr></hr>
						<p>
							做核酸！我感覺這是為數不多能讓我出門的理由。我跟我的兩個室友住在這出租屋裏。我們也許都是剛畢業的學生，也許只是從外地來到這個城市打工的人之一，也許我與我的兩個室友除了居住上的交集，本不應該認識彼此。但是至少，我們在一起有著和睦的居住生活，他們兩個給我平日的生活增添了許多樂趣，至少，我在回家以後有人能與我對話。我的室友們跟我一樣，不怎麼喜歡在閑暇的時候出門，也許是因為我們所居住的大樓應有盡有。想吃好吃的，叫個外賣就好了，想鍛煉身體，在大樓裏就能解決，想娛樂，我們喜歡在家裏玩遊戲，甚至我們可以在家裏各做各的工作。出門，似乎沒有那麼多必要性吧。窗外的世界還有瘟疫的流行，我有時候也會幻想，幻想這水泥鋼筋玻璃組成的盒子，能讓我與外界隔離開來，窗外發生的事情也許從來都與我無關。但是現實不是這樣的，在一個盒子之外，還有另外一個盒子，城市是一個大盒子，在這個大盒子裏的人就多了。而每個人似乎都是為這城市運轉提供動力的齒輪，互相連接，卻沒有必要互相認識。一個齒輪出現異常，別的齒輪也不能正常運轉了吧。事情是這樣發展的，從疫情第一年開始，我早已被牽扯進去，做核酸，無法避免，不出門也無法避免。你問我疫情開始之前是否有可能以不同的生活方式進行著我的生活？當然有可能，但那都已經不重要了吧，這場疫情改變了所有人的生活，改變了生活的方式。三天前，我跟往常一樣做了核酸。三天裏，我一直在家裏，和我的室友們娛樂，或者分開著工作，也許也會有人和我一樣，在家裏養著幾盆盆栽，悉心照料。三天後，我不知道為什麼收到我是陽性的通知。也許跟我一開始想的一樣，齒輪，我們都是緊密連接卻又相隔遙遠的齒輪，默默轉動著，為了那一個我可能看不見的最終結果而運轉著。我要去隔離了，離開這個出租屋一陣子，也許我的工作，我的娛樂也能在另一個室內，另一個盒子裏繼續進行著。
						</p>
						<hr></hr>
						<p>
							什麼是天倫之樂，我從年輕的時候，就好多次聽到別人說，等退休了，我就能享受天倫之樂了。我也確實享受著吧，我跟我的外孫住在一起，我的孩子平時工作忙，我就來幫他們帶帶孩子。我很高興，看著我的外孫快樂地長大。最近剛開學，暑假結束了，我又開始送我的外孫上學了，也許我能輕松點了，也許我也不舍得，但是我總歸會有一些屬於我自己的個人時間。其實我有時候也很擔心，現在這個疫情這麼嚴重，要我看啊，就別開學了，孩子回到學校多危險啊。我在送我外孫上學的路上，千叮嚀，萬囑咐，讓他千萬不要隨便脫掉口罩。看著外孫開心地走進學校，屬於我的一天開始了。我得去做一下核酸檢測，疫情這幾年來這幾乎都成了一種習慣了，我也沒有感覺啥不方便，也就是有時候排隊的人有點多。但是我都退休了，也沒有什麼事情要讓我著急去完成。最近的疫情太嚴重了，聽說後面連著幾天都要做核酸，因為我們城市最近陽性的人太多了，而且聽說我還是密接，所以被重點管理了吧！我不怕去隔離，我看之前他們在方艙醫院裏，唱歌跳舞，似乎也沒有那麼不堪吧。服從國家的決定是我們現在為數不多能做的事了，畢竟我們哪有專家懂這個疫情嘛。連著做了幾天核酸，我是陽性的，我要去隔離了。希望我的孩子能照顧好她的孩子吧。
						</p>
						<hr></hr>
						<p>
							我家附近有一個公園，是為了紀念當年地震的遇難者而建的。我有時候會去那個公園走走，也許是這個公園與我個人的經歷有關，也許只是希望有一個喘息的地方。人到中年，壓力也許是比年輕時大一些吧。我在公園兜兜轉轉，不知不覺就有可能沈浸在這環境之中。有時我在這個公園裏，走著，看著，思考著，幾個小時就這麼過去了。從夕陽西下，到華燈初上，我才慢慢回家。回到家裏，溫馨的家，是結束一天的好地方。當我醒來的時候，生活似乎出現了一些波折，我們一家都是密切接觸者，沒辦法呢，全家一起去做核酸。後面幾天也不能出門了，直到確認我們沒有感染的風險才行。隔離對我來說意味著什麼？我不能上班了，我妻子也不能上班了，我的孩子不能上學了，我媽媽也不能做她想做的事情了。我們全家的生活都得暫停一下吧。你問我害怕嗎？說實話，也許是有點怕的，但是又有什麼辦法呢？大局為重吧。跟當年地震的時候一樣，可能我們身邊並不缺少英雄，集中力量辦大事嘛。這次核酸檢測，我大概也能猜到結果，我是陽性的，我要去隔離了。
						</p>
						<hr></hr>
						<p>
							每一個在城市中的個體像是一粒沙，本來我們都是單獨的存在。你可以說，沒有一粒沙是一樣的，你也可以說沒有一片雪花是一樣的。我們的生活各不相同，卻可能在某些地方相似。你從海邊小心地拾起兩粒沙，在放大鏡下仔細觀察，你發現，似乎從某些角度觀看，這兩粒沙有幾分相似。也許是材質，也許是被風化的棱角。不知道你有沒有在某一時刻，懷疑這兩粒沙在數萬年前是一粒沙，只是不知道後來有什麼原因，將它們一分為二。所有的沙也許本來都是一粒沙，不知道什麼原因，天知道它們被分成多少個的獨立個體，也許本來這個世界上沒有沙。我們的生活各不相同，但也許是命運的安排，繁複的可能性中會產生重疊的軌跡，卻是因為少數的重疊，讓彼此獨立、單獨的殊途，一同遞歸到那唯一的目的地。
						</p>
						<p>
							說實話，我們從沒有想過認識對方，也不知道會以什麼樣的方式認識對方。我們嘗試回想，是什麼讓我們最終都成了一類人，難道是因為我們住得近嗎？我不知道在我們之中，是誰改變了我的命運，也有時候會再度思考，這種問題是有意義的嗎？不明白，也不想明白，更不能明白。你說，我應該憤怒嗎？
						</p>
						<p>
							我們住在城市裏不同的地方，我們在社會中有著不同的職業，我們的家庭也以不同的成員組成。是什麼讓我們如此相像，是什麼讓我們的生活產生了交集。其實這並不難理解，我們的生活雖然看似不同，但是無法跳脫出人類的基本需求，吃飯。你說我們努力工作的目的是什麼，其實對於我們來說，不對，不止我們，還有好多好多人，賺錢是為了餵飽自己，餵飽家人，在食物上的消費是不能停止的。我們每個人，我說的是每個人，都要在食物上進行消費，可能是去超市買菜，可能是去飯店吃飯。無法避免的舉動，讓我們產生了無法避免的交集。你說，我應該自責嗎？
						</p>
						<p>
							其實還有一些生活中的片段，也讓我們成為眾矢之的。無癥狀感染者，我很好奇這意味著什麼。你覺得呢？我覺得首先是我們無法意識到我們自己攜帶這個病毒，我們感覺良好，我們感覺平常。狡猾的病毒！如果我們感覺病了，我們也許不會為家人買菜了，如果我們感覺病了，我們也許連門都不會出。狡猾的病毒，以我為載體，在不傷害我的前提下，以我去傷害他人。你是這麼想的，對嗎？你說，我應該愧疚嗎？
						</p>
						<p>
							對了，那天我的“同伴”跟我說，如果你願意這麼稱呼我們的話，因為在今天之前，我還不認識這個人，但是正如我之前所說的，我們成為了一類人。總而言之，那天我的“同伴”跟我說，就算他那天感覺到他生病了，他也會出門。我問他那天去哪裏了。他跟我說他去參加了一場葬禮。我不知道這對於他來說意味著什麼，摯愛的葬禮，還是什麼的葬禮？我不敢多問，畢竟葬禮的種類改變不了他悲傷的本質。葬禮啊！讓我想想，如果我得了病，我會參加這個葬禮嗎？我會把這個病傳染給別人，讓葬禮中本就存在的悲傷情緒，變成一種，可惜，憤怒，和悲傷的混合物嗎？我不敢細想，畢竟在“同伴”參加葬禮的那一天，我還去逛了一下商場，想著買點禮物給我快要生日的家人。我曾有一個美好的一天。
						</p>
						<p>
							說到這裏，你可能已經忘了，也有可能是我沒有告訴你，我們是四十四個個體，四十四個個體在一起跟你說話，四十四個家庭。其實當我了解了其他人在這幾天都去幹了什麼的時候，我還是很難以相信一件事。我們的生活在往不同的方向發展著，確實有一些相交的點，但是大家的生活都太不一樣了，我本以為我們的生活沒有任何的可比性，我本以為我們是我們個人生活的主宰，但是在昨天，我們所有人的生活都暫停了。當我說暫停的時候，就是說，我們四十四個人，都在家裏待著，哪裏都沒去，什麼事情都沒有！我們似乎從昨天開始，所有需要完成的事都消失不見了，你說這是巧合嗎？生活中的瑣事消失得無影無蹤，只剩下一件重要的事。我不知道我是否應該抱怨，我從小接受的教育告訴我，大局為重，你說犧牲我想要做的事情，把我帶去隔離，能拯救我的城市嗎？仔細想想，其實那天我的“同伴”應該算是得到了幸運的待遇，我說的是那天去參加葬禮的那位“同伴”，我有時會想如果那場葬禮再晚個兩天，三天，那位“同伴”還能參加嗎？應該如何告別呢？一個生命的逝去是可以預測的嗎？
						</p>{' '}
						<p>
							熙攘的集市是人民生活美滿、豐富的象征，當每個人都還擁有自己的生活，自己的目的的時候，這一切欣欣向榮的蓬勃似乎永不會停止。我有時候會覺得社會是一台無法停止運轉的巨大機器，或許一往無前，或許能衝破各種障礙。恐怕沒有什麼力量能與這機器停下時的慣性抗衡吧！由我們普通人組成的力量。但是我好奇，我們的生活雖然各不相同，但是真的存在著什麼不同嗎？我的意思是，當那個人去了城東的早餐店，我去了城西的早餐店，似乎我們的生活只有地點的不同，卻都只是為了活下去而奔波勞碌，我不知道怎麼解釋那種陌生又熟悉的感覺。血肉可以築成新的長城，以產生堅不可摧的銅牆鐵壁嗎？還是說，我們隨著洪流，生活的洪流，其實是被改道的河流，滔滔不絕的延綿江水看似勢不可擋，水流，卻是不是，只是在既定路程裏奔向已被規劃好的目的地呢？我不懂啊，我只是個普通人。我有時候覺得我是一片羽毛，他們也都是和我一樣的羽毛，一片羽毛飛向你，沒有任何重量。四十四片羽毛一起飛向你，沒有任何重量。一張同樣是輕飄飄的網，就可以改變羽毛的飛行軌跡，甚至困住羽毛吧。
						</p>
						<p>“停下！”</p>
						<p>
							一聲命令，我們四十四個人的生活隨即停止，沒有絲毫猶豫，沒有絲毫選擇。
						</p>
						<p>“隔離！”</p>
						<p>
							同樣的，我們四十四個人沒有絲毫猶豫，沒有絲毫選擇。也許我們能一起喊出一句話：我要去隔離了。{' '}
						</p>
					</div>
				</div>
			</div>
			<div className="panel-eng">
				<button className="viewTextButton no-select" onClick={showMore}>
					{'       English Version       '}
				</button>
				{more && (
					<div className="content-eng no-select">
						<p>
							The pandemic has started a trend of cooking at home. People make
							bread, cakes, and even some dishes that can only be cooked by
							those who obviously have a lot of spare time. These talented
							people are making all these fancy dishes. But I am a single man
							who has to travel from one city to another every day for work.
							When I get home, I just want to go to sleep, so I don't have the
							desire to cook for myself because that may make me feel even more
							lonely. As early as before the pandemic, I was very excited to
							find affordable and delicious restaurants in different cities.
							Although it may not be any delicacies, it is a great reward for my
							hard work. Also, there are different business dinners, so it will
							be beneficial for me to keep some restaurants in mind to host
							these events more easily.
						</p>
						<p>
							Unfortunately, due to the pandemic, many of the restaurants I am
							familiar with cannot continue business for various reasons. When
							there was no lockdown, the number of people was fewer than before.
							Now is still a difficult time, and every industry desperately
							tries to hold on. Under all of these, gladly, my job is kinda
							stable. I need to travel between Chengdu and Pengzhou, which also
							allows me to visit different restaurants to find some food I like.
						</p>
						<p>
							For lunch, I have stir-fried dried mushrooms, and for dinner, I
							have Yun Nan traditional rice noodles.
						</p>
						<p>This restaurant in Pengzhou serves delicious pork soup.</p>
						<p>
							Simple two dishes and a soup, stir-fried fast food restaurant
							portions are large and cheap. Dinner is rice soup.
						</p>
						<p>
							Simple breakfast, I go to a Szechuan Style Restaurant with my
							colleague for two quick dishes at noon.
						</p>
						<p>⋯⋯</p>
						<p>After three days of waiting, neither more nor less,</p>
						<p>
							I received notice that my PCR test is positive, and I am going to
							be quarantined.
						</p>
						<hr></hr>
						<p>
							"Ladies and gentlemen, we are approaching Zhanjiang West Station,
							please check your luggage and prepare to get off the train."
						</p>
						<p>
							I hold my luggage and prepare to get off the train—the familiar
							station, the same humid air as usual, but without any sense of
							home. I thought I might never return to this city again, but my
							family, whom I have decided not to rely on anymore, reached out
							with the news of a critical illness. My childhood playmates, they
							are sister and brother, called me to come back for a visit because
							this could be the last time. During my absence, they treat my
							mother as if she is their mother, so it is time to come back for a
							visit, for both friendship and kinship.
						</p>
						<p>
							"Long time no see!" I can feel the sister's enthusiasm through the
							mask, and the young brother is bashful as before. Because of the
							current pandemic prevention policy, I must be self-quarantined at
							home. There is no preparation at home because my mother has been
							admitted to the hospital. The sister kindly bought some
							necessities and food for me and promised me that she would come
							over every day to cook. Since I am in quarantine, I shouldn't go
							outside.
						</p>
						<p>
							After a few days like this, my quarantine life was very boring,
							only having a little entertainment with my friends during dinner
							time every day. The rest I can only spend my time watching TV
							shows and short videos on DouYin. My friends continued to go to
							the hospital. They transfer information like a bridge between my
							mother and me. My mother is happy that I am back, and things seem
							to have stabilized. They told me the house was quiet without me,
							but my mother kept my room tidy and looked forward to my return.
							When the sister is at work, she brings me back some local food
							from time to time, which tastes just the same as in my childhood
							memories. Although I am quarantined at home, I think I am healthy
							and do not look infected by any virus, and soon we all eat
							together at the table. I have two more days to go to the hospital
							to see my mom.
						</p>
						<p>
							The two boring days pass very quickly. To celebrate that I can
							finally leave home tomorrow, I take the PCR test and prepare food
							with the ingredients in the fridge while the brother brings some
							boba tea. We all have a great time, and it's probably been a long
							time since having such laughter in this little house.
						</p>
						<p>
							Late at night, I was told that I had tested positive for a PCR
							test and that the brother and sister might be in trouble too.
						</p>
						<p>The future is uncertain. I am going to be quarantined. </p>
						<hr></hr>
						<p>"Okay, I'll be back soon."</p>
						<p>
							The call hung up, leaving only the empty ringing sound. Perhaps I
							grew up under the shade of my grandparents, and until the year I
							went to college, I chose to study abroad. I still miss them the
							most. But a pandemic made the journey home a long one. One's
							health is deteriorating, and after a phone call with my family, I
							decide to return.
						</p>
						<p>
							The two-week-long quarantine was not easy, and the anxiety in my
							heart is magnified during the lonely nights. When I see my family
							again, the elders look older than I thought. When I was a kid,
							they always took me on the bus and went to different places in the
							city. But now, the bus ride to the People's Hospital is like an
							unknown void, and I don't know what I will see in the hospital and
							what I need to accept. The elders were once in excellent health,
							but the health of the elderly is sometimes like a storm that
							catches people off guard, like dominoes falling on their sides
							with no sign of a turnaround. The pandemic? I don't care about
							that anymore. The pandemic is not as important as my family!
							Although my sanity told me that I am young and perhaps not so
							afraid of the virus, and I have repeatedly told the elders to stay
							at home to avoid exposure to the virus in the hospital, they
							couldn't settle down at home. It seems that a family member, a
							life, will pass away in unseen time, and everyone wants to look
							after him. So, the back and forth between home and hospital
							continued until August 30th. The two-week-long quarantine was not
							easy, and the anxiety in my heart is magnified during the lonely
							nights. When I see my family again, the elders look older than I
							thought. When I was a kid, they always took me on the bus and went
							to different places in the city. But now, the bus ride to the
							People's Hospital is like an unknown void, and I don't know what I
							will see in the hospital and what I need to accept. The elders
							were once in excellent health, but the health of the elderly is
							sometimes like a storm that catches people off guard, like
							dominoes falling on their sides with no sign of a turnaround. The
							pandemic? I don't care about that anymore. The pandemic is not as
							important as my family! Although my sanity told me that I am young
							and perhaps not so afraid of the virus, and I have repeatedly told
							the elders to stay at home to avoid exposure to the virus in the
							hospital, they couldn't settle down at home. It seems that a
							family member, a life, will pass away in unseen time, and everyone
							wants to look after him. So, the back and forth between home and
							hospital continued until August 30th.
						</p>
						<p>
							The doctor issued a notice of critical illness in the afternoon of
							this day. In the doctors' and nurses' rescue, in the end, they
							could not pull back life from the hands of death. The time was
							paused at 8:00 pm. But we also know that death may be a kind of
							relief.
						</p>
						<p>
							During the pandemic, everything has to be kept simple. My family
							and I bought the wreath and decorations for the funeral the next
							day, and the memorial hall was well prepared. Not many friends and
							relatives can be there, but I feel everyone under the masks bids a
							friend and a loved one farewell. A long life has come to an end in
							three days.
						</p>
						<p>
							We may be children of the soil, and we will all return to the
							soil's embrace in the end. And at this time, I received a notice
							that I am asymptomatic positive, and I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							Retirement is a leisurely life, especially since the pandemic
							began. Every day I go to the market near my home at 8 a.m. on
							time, and it's usually crowded: mobile stalls selling breakfast,
							rushed commuters, busy shopkeepers, bargain hunters... It's also
							the time of day when I can buy the freshest vegetables and meat.
							As the pandemic begins, these noises are gradually muffled under
							masks, and even the yelling seems to have been muted. People have
							become increasingly cautious, afraid to meet people face to face,
							fearful that they would become close contacts and even infected
							with the virus. The crowd is not as busy as it once was, and the
							health QR codes that must be used with smartphones to access the
							enclosed area have made it difficult for customers to reunite at
							this small market.
						</p>
						<p>
							My children keep mentioning on the phone that the elderly have
							poor resistance and are a high-risk group for the virus. I'm too
							old to go anywhere. The only activity for me once a day is to
							catch up with the people in the morning and drop by my old
							friends' stores, who are also small local business owners. After
							the PCR test, there is only a retired elder at home, doing
							ordinary household chores, chatting with the TV, having a simple
							meal, and walking after dinner. It may not be a wonderful life,
							but it also reminds me that it is real because it's plain and
							simple. If I can be infected with a virus in this life, maybe this
							is my fate.
						</p>
						<p>
							The phone rang early in the morning, and I received a notice that
							my PCR test result was positive. I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							I've been living in this city for decades, but this is the first
							time I have encountered such an unusual situation. I barely keep
							up with the trend of using a smartphone. Without one, I may not
							even be able to get in and out of my neighborhood. Most of my old
							friends in the retirement center can't adapt and don't have the
							energy to tinker with this little machine in their hands. After
							all, the words on it are probably too small for us to read.
							Nevertheless, we still meet here almost every day for no other
							reason than that life has not been typical over the past few
							years, and perhaps we would all rather be happy in the midst of
							misery than be alone at home. Taking the risk of seeing friends,
							maybe talking about the world, or having a nice cup of tea
							together, is better than being reminded repeatedly at home that we
							are out of touch with society these days.
						</p>
						<p>
							Recently, PCR tests have become increasingly frequent; there are
							already once a day. Other than that, my everyday life is probably
							limited to grocery shopping in the market and a little activity in
							the park in my neighborhood during my leisure time. Compare to
							other places where people are locked up at home, it is fortunate
							that we can still go around on our own.
						</p>
						<p>
							However, yesterday I received a notice that my test result is
							positive, and I need to go to be quarantined. I just hope that all
							my old friends are well…
						</p>
						<hr></hr>
						<p>
							Since the pandemic has been developing, I always believe the virus
							will not infect me as long as I have good protection. Therefore,
							gloves, masks, and hand sanitizers have been standard setups for
							me. To make a living, I can't stop working. These protections are
							the best way to protect my family and employees. Although the
							farmers' market is not crowded, it is slightly getting better. I
							discussed with the shop owner to prepare fresh ingredients for my
							store and have them delivered tomorrow, as always. My creed is
							that preparation is the answer to every situation, not only in
							cooking but also in epidemics.
						</p>
						<p>
							Today I heard from an employee that the most susceptible moment is
							when people are in line, waiting for PCR testing. At first glance,
							it seems absurd, but it could still be a serious thought when you
							think about it. Even though I am fully protected, I still have to
							take off my mask during the test. Maybe it's true, or maybe it's
							just another ridiculous rumor. There are too many maybes.
						</p>
						<p>
							Unfortunately, I probably don't need to think about it anymore.
							Even though I'm prepared, even though I've done everything I can,
							I'm still infected with the virus, I'm positive, and I'm going to
							be quarantined.
						</p>
						<hr></hr>
						<p>
							Summer is almost over, but because of the pandemic, the school
							start date keeps changing. No one may care about this, and some
							may even be happy. At home, TV, smartphone, and computer are the
							three things that fill my life. Even though my neighborhood is not
							in lockdown, the positive cases occasionally make me and my family
							go out less often. I've been able to play video games and talk
							with my friends online, but it's been a while since the last time
							I went to play basketball with them. Maybe I'm looking forward to
							my new school, or I'm bummed about the end of the holidays and the
							summer assignments that I haven't even touched. It's better not to
							think about it so much and play a couple of rounds of video games.
						</p>
						<p>
							Although we've been staying home, as required by the government,
							we've been getting regular PCR tests, maybe once every two days,
							maybe once a day. As the news has said, this hateful virus is now
							most serious for the elderly and children, but I'm in good health,
							and even if I get sick, that will be mild for me. It's just that I
							often think back to the time two years ago when I hung out with my
							friends, went to the boba tea shop, went to the bookstore, and
							went to the game room together. In the past two years, we seem to
							get used to everything going online, taking online classes,
							playing games online, watching videos, and listening to songs.
							Many times we feel that life is not very realistic, but the
							reality of it makes people feel uncomfortable.
						</p>
						<p>
							Finally, the Education Bureau sent a notice that school would
							start next week. I am still immersed in the laziness of the
							holidays. I begin to feel nervous until I couldn't finish my
							summer assignments. I may meet new classmates, new teachers, new
							schools, maybe all new. I may be in a serious mood, ready to face
							more and more stressful school work, but I will also be happy to
							meet and laugh with my friends again. Maybe this will be my last
							year in school, and I will be worried about an even more uncertain
							future...
						</p>
						<p>
							A phone call brought me back to reality. My test result is
							positive, I'm going to be quarantined, and the vacation starts
							again.
						</p>
						<hr></hr>
						<p>
							A pandemic has made things even more difficult for us caterers. I
							may have been rooted in this city for years, trapped by the
							pandemic, barely able to keep my business afloat. Or maybe I'm
							trying to bottom out in a declining market and take a gamble with
							nature. Either way, the lockdown is over, and it should be getting
							better, right? People are slowly coming out of their homes, and
							there is already a line in the city office. Then, I have a bowl of
							lamb noodles that I have not eaten in a long time, and the taste
							has not changed, but dining in is much better than take-out. In
							the supermarket, perhaps people are no longer as crazy as before
							to stock up, but still subconsciously will buy a little more, just
							in case. In the evening, old friends have a barbecue party, beer,
							and kebabs. I have forgotten the last time I had such a meal.
						</p>
						<p>
							Many times I think this kind of life is what we want. A big
							mouthful of meat, a big mouthful of wine, diners eat happily, we
							earn money and also gain happiness. No matter how developed and
							convenient Internet life is, there is no way to replace the joy of
							raising a glass at the dinner table with friends. Everyone takes
							off their mask, breathes in the fresh air, and feels the aroma of
							the food together. When can we fully return to this kind of life?
						</p>
						<p>
							Let's just say, not right now. I've been notified that my PCR test
							result is positive, and I'm going to be quarantined.
						</p>
						<hr></hr>
						<p>
							The autumn breeze is a sign that the year is almost over. I have
							been staying at home for the past two days and have no intention
							of going out. I may have flowers and plants on the balcony and a
							fish tank in the living room. I take care of these different
							beings. I might turn on the TV, watch a movie and cook myself a
							meal in my spare time at home. The outside world doesn't seem to
							be that attractive to me. I want to live my ordinary life well,
							continue to be common, and have nothing more to ask for, just like
							you. Occasionally, when I get tired of eating the food I made, I
							think about going outside to find something different. "What
							should I eat? Pan-fried buns." The joy of ordinary people's lives
							often comes from the comfort of food and the practice of my human
							desires. Three years after the pandemic started, taking PCR tests
							has become my daily routine. There is no harm in that, I guess,
							the PCR test keeps me from getting sick and gives me the proof,
							the health code I need to continue my life. I don't know what it's
							like to have this disease, but maybe it's dangerous, and we're all
							afraid of getting it. After all, I can't leave the house, I still
							need to take care of the plants, and the house will be dusty after
							a few days without anyone living there.
						</p>
						<p>
							Before I buy food, I'd better get a PCR test. I haven't done it
							for a long time, and I may need to go out of town in a few days.
							Maybe some places will let me in only if I provide a 48-hour
							negative PCR result. I may need the test result anyway. The
							government is still doing an excellent job in this area, at least
							my PCR tests are free. After the PCR test, I got the pancake I
							wanted to eat, and it was time to go home. I usually get my
							results within 24 hours, so I'll just relax at home today, do some
							chores, and have some fun at home, or maybe, Is there something
							else in my life that I'm worried about? I'll be dreaming at night,
							or maybe like you, turning on my phone to watch an interesting
							video before I fall asleep. Maybe like you, I don't fall asleep
							that easily and like to toss and turn before I fall asleep. Maybe
							like you, I am a person who falls asleep as soon as I hit the
							pillow. Maybe like you, I like to spend some family time with my
							family.
						</p>
						<p>The dream may still be as sweet as when I fell asleep.</p>
						<p>
							I wake up, the sun comes out, and I receive a notice that there
							was a positive case at the pancake store I went to yesterday, and
							the message told me that I should have more PCR tests, which is
							fine. I am doing it for my health, just to make sure. But at the
							same time, I had some worries: What if I was infected? Will I be
							quarantined? I am a little hesitant about the PCR test. I am
							wondering if I should go for it. "Nah, maybe just one more," I
							said. I'm not that susceptible to infection, and I don't feel
							anything, right? Anyway, I am going for another PCR test. There
							will be more in the following days. If I hadn't eaten the pancakes
							that day, I wouldn't have had close contact with a positive case,
							and I wouldn't have had to take the test every day. I can't help
							it; I have to go on with my life. I'll go home and do my things
							first, and then I'll be done with the PCR test in the next few
							days. The pandemic in the past few years has been so bad that I
							think many people have chosen to stay at home.
						</p>
						<p>
							It's a new day and another PCR test. I still don't know what my
							PCR test results will be. I guess they will call me soon. In fact,
							I think the color design of this health code is really intuitive.
							Green, just like the green traffic light, my ordinary life can
							still go on usually; Yellow, just like the yellow traffic light,
							everything will become slightly slow and inconvenient; And red,
							just like the red traffic light, is the stop button of my life.
							Don't you find it interesting? When your life can be controlled by
							a program displayed on the screen. Ha-ha-ha, I sometimes think
							it's funny as if my life can actually be paused. I'm afraid my
							life will stop, I know it may not be that bad, but I don't want it
							to happen. I don't want people to control my life. Would you?
							Before I sleep tonight, should I be prepared for my PCR test to be
							positive tomorrow? I don't know. No signs are telling me what to
							do tomorrow. I don't seem to have a choice. If my test is
							negative, I will continue with my everyday life. If my test is
							positive, I will be quarantined. I may look like I have a choice,
							but I don't. It's not me deciding how I should live. Maybe it's
							the disease deciding how I should live.
						</p>
						<p>
							I'm going to be quarantined, yes, I probably expected my test to
							be positive. It's just for a few days, maybe? By the way, who are
							you? Do we know each other?
						</p>
						<hr></hr>
						<p>
							I've been getting PCR tests for the past two days, and they say
							that the pandemic in my city is severe at this time of year. Yes,
							autumn is here. From the previous two years, it seems to have been
							heard saying that the virus will spread faster and more expansive
							when autumn and winter come. I still believe this because the
							pandemic is always back and forth, one wave after another. Does it
							seem that the number of infected people is indeed more in the
							winter? I have long been accustomed to PCR testing. It is just a
							formality, anyway. I went so many times and have not tested
							positive. The chance of infection may not be so high. I have not
							heard of anyone being infected because of the PCR test. Even
							though many people gather together during the test, it doesn't
							matter. Positive cases are always the minority.
						</p>
						<p>
							After all, I have done it two days in a row, and the results are
							negative. I should go to the market today and buy some food to
							take home. I should have cooked a good meal at home, and it seems
							that there is not much oil left in the house for cooking, so it is
							time to go to the market. I might want to buy something for my
							family, and I might want to make a nice dinner for my kids. I'm
							happy I can go to the market and buy what I want, and I'm so glad
							I can make a nice dinner at home. Are you asking what I am happy
							about? Isn't this my most ordinary, everyday life? I don't know,
							and I am not sure. I don't know why, but since the beginning of
							the pandemic, I feel that I should cherish my daily life. Maybe I
							should cherish the green health code in my phone, too, because it
							ensures my life can run normally. The night has come with the
							approach of winter, and now it seems to be getting darker day by
							day. I just got another notice that I still have to go for a PCR
							test tomorrow.
						</p>
						<p>
							The PCR test seems to just interlude my daily life. There are many
							electric bikes in our village, running quietly every day, with the
							riders, going here and there. When they run out of power, they
							need to be recharged at home. Occasional charging does not affect
							the use of the electric bikes, and occasionally there is a small
							bump on the road, which the electric bikes can easily pass. These
							are all interludes that keep the electric bike running smoothly
							and uninterruptedly. The PCR test is considered to recharge my
							batteries! If you do it a few more times, the pandemic will be
							gone! I have two more PCR tests in a row, and this time, I am not
							lucky. The result is positive, and I'm going to be quarantined.
						</p>{' '}
						<hr></hr>
						<p>
							I haven't been out of the house for the past few days but for the
							PCR test. I insisted on going for the PCR test for the past two
							days, and I go out again today for it. I return at noon, have a
							small lunch at home, and in the afternoon, my family asks me to go
							and throw out the garbage at home. I actually like the road of
							walking to the garbage dump. I can look at the scenery on the way,
							take a break, and say hello to the neighbors in the village.
							Although sometimes people tell me that our village should change
							the location of the garbage dump or the way they collect garbage,
							because when I walk there in the afternoon it may be fine, but at
							night, especially in winter, it's really dark and cold to walk
							there. I should rest at home tomorrow, I've had the PCR test for
							three days in a row, so I don't think I'll have any problems. What
							should I do?
						</p>
						<p>
							I got the notification that my PCR test results are out, and it's
							positive, so I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							I have lived in this village for many, many years, and life in the
							countryside is peaceful, away from the hustle and bustle of the
							big city. My job is to work on my family's farm. Do you think this
							is comfortable, or my unchanging life is boring? Since the
							pandemic, the village has been asking us to go for PCR testing.
							Over the past few years, seems like my life has changed a bit? But
							maybe most stayed the same. I have heard people say that the PCR
							test is like a small part of our lives, it only takes ten minutes!
							It doesn't affect my life very much, I guess. I usually wake up in
							the morning, have breakfast with my family, feed my dog, and head
							out into the sunshine to work on my family's farm. If you ask me
							if this is the land that my family passed down to me, I am not
							sure, but I am sure that it is the land that I was given by the
							government later. I have a piece of farmland to cultivate, and
							maybe it is my freedom to plant whatever I want. I work until
							noon, until the sun is blazing, and then I take a break and eat
							something simple. In the afternoon, I go to the village entrance
							to meet my friends and play cards or chat. Then, until the sun
							sets in the west, we go home slowly smelling the smell of each
							family starting to cook. I have heard that people have lived in
							rhythm with the earth's rotation around the sun for thousands of
							years. I enjoy the nighttime every day. In the village, the night
							is tranquil, without the noisy traffic in the city. There may be
							crickets chirping, frogs chirping, and you may hear children's
							laughter from the next house, until the moon hangs in the middle
							of the sky intact, all the sounds gradually extinguished. I go to
							dreamland.
						</p>
						<p>
							I wake up at sunrise and receive a notice that my PCR test result
							is positive. I am going to be quarantined.{' '}
						</p>
						<hr></hr>
						<p>
							I live in a jewelry company in a small town where I may be an
							employee, or I may be the owner. I started working for this
							jewelry company right after I graduated from school. My family
							lives not too far away, and I chose to live in the company to save
							my daily commute time to work. In fact, as a jewelry company, It
							is better to have someone stay at night to ensure the safety of
							the inventory, and in many cases, I choose to work the night shift
							in the company so that I can find a place for me to rest at night
							while I work. Although I have lived in the jewelry company for
							most of my life, there are still different places I need to go
							every day. Today, for example, I was going to visit a friend's
							house nearby. My friend lives in a nearby village, and this friend
							is from the same village as me. I just happened to get a chance to
							go home and visit. Work, so that I get paid, so that I can feed
							myself and my family. Occasionally, I still have to go home to
							visit. I stay in the village until the early morning before I go
							back to the jewelry company slowly. I am curious to know when the
							jewelry company has become an important place in my life, a place
							to rest at night, a place to work at night. I stay at the jewelry
							company until the next afternoon and then go to the village. This
							village is where I grew up, and my life seems to be divided into
							two parts by two different places, one for work and living and the
							other for fun and relaxation. Two different lives in two different
							areas. Would you say my life is happy? Sometimes I feel that my
							life is good, and sometimes I look at the mundanity of my life.
							Today is the same as yesterday. I go back to the office from the
							village in the early morning and plan to spend my night at the
							office. By the way, I forgot to tell you that I like to go out and
							buy some food before returning to the office. I don't seem to care
							much about whether a late-night snack is healthy. Tonight, I
							decided to have some pot stickers.
						</p>
						<p>
							I sometimes wonder if my work and my life are really separate, I
							just seem to have two different places to live, but I don't know
							which one I can call home. I don't call the company my home, maybe
							it's just because my family is not here, my familiar neighbors are
							not here, and I am alone. If it weren't for the familiar sights
							and people, I wouldn't be able to tell where my home is. You can
							say that I live a constant, boring day, the days are spent in a
							day-to-day cycle, but I would like to ask, how many people are the
							same as me in this society? I am asking about the percentage.
						</p>
						<p>
							It's been a long time since I've had roast pork and the Chongqing
							noodles I loved when I was a student. I decided to go to the
							supermarket this afternoon to buy some daily necessities and maybe
							buy my food for the day too. After I finish shopping, there is
							still some time before I go to work, so I go back to the village
							again to chat with my family. Maybe it's not as attractive as you
							think, but just a normal part of life. Before I went to work early
							in the morning, I couldn't resist buying pot stickers. I really
							like the pot stickers made by this small store. It is very
							convenient and close to my company, and it tastes delicious, and
							the price is also very fair. After buying the pot stickers, I
							remember that the company seemed to be missing some office
							supplies, so I had to go to the supermarket again. After I
							finished shopping, I went back to the office, stayed until noon,
							and bought some food at the convenience store before going home.
							It was a weekend, and I didn't have to work on Sunday, so I stayed
							in the village until late afternoon and decided to buy some
							dinner. After eating, I walked, browsed the supermarket, and
							thought about what else I needed at home. The village is still so
							quiet at night. Do you think most villages have a calm night like
							mine, where people like to walk around the village slowly and
							enjoy a moment of leisure?
						</p>
						<p>
							{' '}
							How is my life going during this pandemic? I don't know. My life
							is so regular, my health code is always green, and I have no
							intention of getting a PCR test. I don't think I will get this
							disease. I haven't heard of anyone around me getting it. So enjoy
							my weekend, after the workday starts, it's time to go back to
							work, will the days go in the same cycle?
						</p>
						<p>
							Today, they told me to get ready for quarantine. I didn't have any
							feeling that I was sick. They said that I had close contact with a
							person who is positive and I was going to be quarantined. After
							looking at my life, do you think this break in the cycle of my
							life is supposed to make me happy? Should it make me sad? I don't
							know. A period of vacancy only made me realize that my life had
							been put on hold.
						</p>
						<hr></hr>
						<p>
							I have to go to school every day, to the middle school in our
							city. You ask me whether I go for work or for school? I don't
							know, but does it make any real difference? We all go to the same
							places, and we all follow the same daily trajectory. I wake up
							every weekday and go to school until the end of the school day.
							After school, I go straight home, or buy some snacks on the way
							home, or buy some drinks or daily necessities at the convenience
							store. Then I go back to school the next day. I go to school, as
							usual. What happened in school today may have happened to you.
							After school, I return to the village and go to my relatives'
							house for dinner. According to the plan, tomorrow should be
							another day to return to school. But when I wake up, they said
							that a positive patient had visited the snack bar I had been to
							the day before, so I should go and quarantine myself as a close
							contact. It looks like it was time to leave school and my regular
							life for a while. I get a vacation of unknown duration, do you
							think I should be happy? I'm wondering whether I should go to the
							snack bar that day. I don't know, but for now, I am going to be
							quarantined.
						</p>
						<hr></hr>
						<p>
							The recent pandemic has been repetitive, and I've heard so much
							about people starting to get sick again. I am curious if I'll be
							next, and if I am, what will I encounter? In what way did our
							paths cross? Did we go to the same places? Do we have similar
							lives? I don't know. This weekend, I thought I should buy
							something for my family, so I went to the department store in the
							next village, as going out on weekends is always the most
							familiar, relaxing, and popular way to chill. I know a delicious
							snack bar near the department store, which I often visit. The food
							is delicious, the prices are affordable, and it's not far from my
							house. I seem to be feeling a little sick lately, but I don't
							think I have one of those pandemic diseases. After all, I don't
							have any symptoms of Covid. Maybe it's a chronic disease. I'm
							going to the hospital in our city in the afternoon to get a
							prescription from the doctor, and perhaps I can get some medicine
							from the pharmacy to make me feel better. Since the pandemic's
							beginning, whenever I feel unwell, I feel a bit scared, afraid of
							getting sick and being quarantined. Before I go home, I'd rather
							eat out casually. The leisure time at night is no different from
							others, just relaxing at home. You ask me if I have a nighttime
							entertainment life. I might have, but I haven't recently. Maybe I
							need some exciting activities, or maybe ordinary life can satisfy
							me.
						</p>
						<p>
							When the sun comes up again, I brush my teeth, get ready, eat
							breakfast, and go out for my PCR test. I don't know what people
							think of the PCR test, but I don't know if I hate it since it
							doesn't particularly bother me. After all, it doesn't take long to
							get a PCR test each time, but recently I seem to have heard people
							say that the gathering of people during the PCR test makes the
							disease spread even faster. I don't get it either! After all, this
							is what my life is set up to do! The life I am set up to live!
							After the PCR test, I stop by the grocery store to pick up some
							food. I will get a haircut this afternoon, so I just grabbed
							something for lunch at the grocery store. I am delighted with my
							new hairstyle. The hairstylist worked on it from afternoon to
							evening, and it was time for dinner, you know, how much can one do
							in a day? Before I went home, I bought some food outside, and went
							to the convenience store to bring some snacks home for my kids to
							eat, and the weekend was over in an uneventful, busy, leisurely,
							and fulfilling time.
						</p>
						<p>
							Today is Monday, and according to the general schedule, I have to
							take my kids to kindergarten, but today I have to go to the PCR
							test in the morning, so I let the other family members go. I
							picked up the kids from school in the afternoon, took them to buy
							snacks, shopped at the supermarket, and bought the ingredients for
							dinner for the family. The family's dinner is not only simple but
							happy.
						</p>
						<p>
							Early Tuesday morning, I received notice that I was a close
							contact. I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							Ha-ha-ha, you ask me about my life? What? You didn't ask me but
							read it yourself? Well, you can see what my life has been like
							this week; it's a little hard to describe. I didn't go anywhere,
							but I did have four PCR tests. I'm probably just an average
							working person, with the few pleasures of life being a daily walk
							around in my neighborhood after dinner. Four consecutive PCR
							testing in four days, either at my company's or the community's
							request, and when they told me I was going to be quarantined, I
							didn't know when I got the disease. Do you think it's possible
							that so many people gathered during the PCR test and caused me to
							be infected? I really don't understand it. Anyway, it could be
							that I got the disease during walking or I got it at work, it
							doesn't matter, anyway, I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							I am a jewelry salesman. Since the pandemic began, our store's
							business has been affected a bit, but unsurprisingly, I have to go
							to work every day, including weekends. Usually, more people come
							in on weekends, and the store is busier. If you ask me if there is
							anything special about my life, I think there is probably nothing.
							What is unique is that after the pandemic started, I sometimes had
							to get a PCR test before going home. I've been doing this for
							three years, and sometimes I think I'm lucky. In the past three
							years, I've seen too many stores close and many people lose their
							jobs. Maybe I'm fortunate. God knows how many times I've had a PCR
							test over the years, but I've kept doing the test for three years,
							and I've never been the unfortunate one, I've never had the
							disease. Today, I'm going to do the PCR test and go to the mall to
							buy something. I want to see the jewelry in the mall, which is one
							of my few interests. No extraordinary life, no special dinner.
							Before I go to sleep, I may think that tomorrow will be the same
							cycle. But when I woke up, I was told to stay at home and that
							someone would come to take me to the quarantine. Even though I
							don't feel anything, I probably still have this disease. Okay,
							I've been lucky enough for three years, so it's time for me to be
							quarantined.
						</p>
						<hr></hr>
						<p>
							It is another National Day, and like the past two years, I don't
							want to go out this holiday, and this year I don't even feel the
							urge to go out for dinner and drinks with friends. I just want to
							enjoy a moment of tranquility, a moment of not being shot in the
							forehead by a body temperature gun, a moment of not having to wear
							this weak but critical protection on my ears. I want to be able to
							enjoy the food, endlessly watch the shows, and sleep as I please,
							it's a perfect vacation.
						</p>
						<p>
							In the past few days, the only thing I've gone out for is to have
							my PCR test done.
						</p>
						<p>Several times, the test was negative.</p>
						<p>(A few days later)</p>
						<p>The phone rang.</p>
						<p>I got the result back.</p>
						<p>It was positive,</p> <p>but I was asymptomatic positive.</p>
						<p>What a perfect vacation.</p>
						<hr></hr>
						<p>
							On the last day of the holiday, I decided to go with my elders to
							visit my relatives whom I have not seen for a long time. They are
							relieved to see that everyone is well. The old generation has been
							working hard all life-long, and the Chinese medicine clinic
							downstairs of my apartment always provides excellent care and
							relief. We barely leave our home these days, so now is the time to
							let everyone enjoy themselves.
						</p>
						<p>
							The rest of the holiday is nice. I spend some time in the hot
							springs and parks, playing in the water and reliving the taste of
							the grass.
						</p>
						<p>
							The child next to me is laughing happily, and at this time, I
							receive a notice that I am asymptomatic positive.
						</p>
						<p>The elders in my family, too.</p>
						<p>We are going to be quarantined.</p>
						<hr></hr>
						<p>
							It is 1:00 p.m., another day closer to the end of the holiday. I'm
							running out of food at home, so I hope there's still some fresh
							meat and vegetables in the supermarket downstairs. I'm in
							e-commerce, and I have to say that this pandemic has made my
							company's business better, and with everyone at home on their
							phones, there's no better opportunity than this.
						</p>
						<p>
							What? The real economy is in a recession? What can we do? Our
							money, our communication, now are all on this tiny screen... You
							can call me a speculator, but making a living is not wrong, right?
							The real economy has bad luck, and those people choose the wrong
							starting line. This may be their fate. It will not be too late to
							pity them when I can have fine dining for dinner every day. Now I
							can only have this meal, suffer and live with it.
						</p>
						<p>
							Another day at work, nine to six, commuting from home for one and
							a half hours. I used to pretend to be a good student, and now I
							pretend to be a good employee. Maybe it is my first day after the
							holiday. I am a bit tired.
						</p>
						<p>
							In the middle of the night, I am told on the phone that I have
							been diagnosed with the virus and I am going to be quarantined.
						</p>
						<hr></hr>
						<p>
							"The mall is not as crowded as it used to be." I've heard my
							colleague say this a dozen times over the past year or so. What
							can we do about it? People are now stuck at home! "It will be fine
							after a while. There will be more and more people going out,
							right? The other colleague always has the same answer. The first
							one may have a child who has just started elementary school, while
							the second colleague may have just gotten married, and I may have
							just graduated from college. For living, we gather at this
							cosmetic counter. According to their saying, the National Day
							holiday was supposed to be one of the peaks in sales, but now,
							with only a few guests with the masks on their faces, our counter
							has been uncrowded for quite a while.{' '}
						</p>
						<p>
							It's not hard to work, and we can talk together, so we don't feel
							bored. We talked about life, my colleagues' children, the joy of
							our new marriage, celebrities, and jobs. ...... Time passed in a
							flash. Every day during the PCR test, I can also stop by the
							supermarket to buy some snacks to keep myself focused on work
							until 10 pm.
						</p>
						<p>
							I initially thought everything would pass calmly until I received
							notice that I was diagnosed with the virus, and my colleagues are
							also considered close contacts. As a result, we are all going to
							be quarantined.
						</p>
						<hr></hr>
						<p>
							The teachers from our kindergarten told us that we should wash our
							hands more often and pay attention to hygiene. I don't know if
							it's hard for you to imagine how much of my life this pandemic has
							taken up so far because I'm much younger than you. Do you remember
							when you were in kindergarten? That was probably many, many years
							ago, and I don't think about it as much as you adults do! We might
							have learned songs about the pandemic in kindergarten, and our
							teachers might have told us that those who wore protective
							clothing are heroes, great heroes! When you were a child, did you
							also look up to those great heroes? In fact, life in kindergarten
							is not as easy as adults think. Our parents sent us to
							kindergarten so someone could take care of us while they are at
							work. Today is just like any other day, a Thursday, I still have
							to go to kindergarten. I may be sad to leave home or I may be
							looking forward to seeing my friends. But I was feeling a little
							sick today. I ate breakfast with my dad at the bakery downstairs
							from our home, and he took me to kindergarten. I met the teacher,
							who noticed that I wasn't feeling well and asked my dad to take me
							home. The teacher was also very nervous, afraid that I was a
							positive case. After I got home with my dad, after I stayed home
							for a while, I didn't seem to feel so bad anymore. People said my
							symptoms might be due to bad food in the morning? I don't know! I
							went back to kindergarten in the afternoon and my dad couldn't
							pick me up until he got off work. In the evening, I seemed to feel
							worse. My dad thought I had a cold, but he said for my safety, we
							should go for a PCR test. It was 10pm, and I wanted to go to bed,
							but my dad took me to the PCR test anyway.
						</p>
						<p>
							After the test, I felt worse and worse. I might have a cough or a
							fever, and for the next two days they told me to stay home and not
							to go anywhere. I heard that a lot of adults are going to be
							quarantined, so am I going to be quarantined too? I may not care
							about quarantine as much as you adults do because my dad told me
							that if I went to quarantine, I wouldn't have to go to
							kindergarten and I could watch TV every day!
						</p>
						<p>
							The next day, my dad told me that my PCR test results came back
							and he told me that I was going to be quarantined. I should be
							happy that I can watch my favorite TV show for the next few weeks
							without going to school. But I also miss my friends in
							kindergarten a bit.
						</p>
						<p>
							I work in a supermarket and specialize in toilet paper sales. Ask
							me about my life? My life is nothing unique, it's the same as most
							people around me. We go to work on weekdays, and in our
							supermarket, there are three shifts every day, sometimes I work
							the morning shift and sometimes the evening shift. I work eight
							hours a day, my life is quite regular, my work may not be too
							difficult. Today, I started walking home after I got off work at 6
							pm. Sometimes I may also admire the prosperity of this city,
							looking at the people in a hurry on the way home from work, I may
							also be curious about everyone's life, just like you. I often bump
							into my neighbors on my way home, and we always have a friendly
							chat and share our day. We are having a simple dinner to end an
							ordinary but satisfying day.
						</p>
						<p>
							The next day, I worked the morning shift and the evening shift. I
							had to go to the supermarket at 7:30 am to prepare for the day's
							work, and I left work at 12:00 noon. In fact, sometimes I think
							this kind of work schedule is quite good. After I finish work at
							noon, I have a lot of time to prepare a meal for my family before
							I go to work at night. On my way home, I saw some fresh fruit at a
							fruit stand on the roadside and bought some fruit to share with my
							family. My daughter told me she needed some supplies for school,
							and there was an office supply store right next to the fruit
							stand, so I could bring some supplies home for my daughter.
							Luckily I remembered, otherwise she wouldn't be able to do her
							homework! I had to go to work again at 6:00 pm. The evening shift
							ended at 10:00 pm. I had a quick dinner before going to work.
							After all, I didn't have much time left after work. At the end of
							my shift, my day was over.
						</p>
						<p>
							If you really ask me what the disadvantage of this job is, it may
							be that I have to work on weekends. There is no reason for
							supermarkets to be closed on weekends, right? This Saturday, I
							worked the late shift, so I had some time to myself in the
							morning. I planned to go shopping and buy something for myself. I
							might have bought some clothes, some decorations, and some useful
							things for my home. The supermarket job allows me to deal with
							different people every day. I say different people, but in fact,
							most of them are neighbors who live nearby. In the evening after
							work, I had to go with my two daughters for a PCR test, which was
							a bit far away, and we had to take a taxi. It was almost midnight,
							and I couldn't finish my day until 12:00 am. Do you think my day
							was busy or fulfilling?
						</p>
						<p>
							My neighbor and I go to the market early in the morning to buy
							groceries for our family. My neighbor is about my age and has a
							family to care for. We wanted to get to the market early so that
							we could buy the freshest food. While shopping, I got a call
							saying that our PCR results came back yesterday and that we were
							probably positive and needed to get tested again immediately. I
							had to go home and take my daughter with me to get her PCR done.
							Too many people lined up at the PCR testing station, and it was a
							crowded scene. I asked my daughter to wait in line while I went to
							buy something for us to eat. We hadn't had breakfast today. We
							waited in line until almost noon before we finished the PCR test,
							and I wasn't going to go out today, so I went home to rest. I'll
							have a quick dinner with my family, maybe watch TV and relax, or
							maybe I'll have a lot of chores to do. Just as I was about to go
							to bed, just after midnight, I received a notice that my PCR
							results were positive. I was told to stay home and that someone
							would come to take me to quarantine now. What can I do with the
							vegetables I just bought this morning if I am going to be
							quarantined?
						</p>
						<hr></hr>
						<p>
							It's been a week since school started, and I've been up early
							these days, but my mom is always awake and has breakfast ready
							before me. On the way to school, I might meet a few classmates so
							we can go to school together. The road to school was not
							particularly far. I could see many hot breakfast stands on the
							way, which looked very tasty. I could see other parents dropping
							off their children at school, and I also wanted that too, so that
							I could get to school before everyone else. Although we can all go
							to school together now, we still need to wear masks. My mom has
							told me not to take off my mask and not to eat snacks during
							class, but I can still see some of my classmates doing it. Because
							it was the beginning of a new semester, the teachers didn't assign
							much homework. The new textbook is full of content that my
							deskmate said she knew, but I was confused.
						</p>
						<p>
							Soon the morning class was over, and my friends and I went to the
							supply store next to the school to buy new supplies after lunch.
							My father also said that in order for me to study well, he decided
							to give me a hundred bucks, which was enough for me to buy a
							pencil case, some book covers, and the latest comic book. There
							were many new things in the supply store, but the line at the
							checkout was really long, I couldn't wait! After I got home, my
							mom and dad helped me organize my school bag, which was small but
							heavy. I went back to school after 1:00 and started my afternoon
							class. The afternoon classes often made me sleepy, and even the
							teachers were not very energetic. At 10:00 pm, my parents took me
							to have my PCR test done, as they had been doing for over a year,
							but I still hated being poked in the nose with a cotton swab. It
							was very uncomfortable. So this is how I spent two days in a row.
						</p>
						<p>
							Over the weekend, my mom and dad each took me to have a PCR test.
							But in the evening, my mom received a phone call and looked very
							alarmed. At 1 o'clock after midnight, some people in protective
							clothing came knocking on the door. Mom, dad, and I were taken
							away together. I missed my school bag, my new supplies, and the
							noisy classroom. I don't feel sick, but the result is positive
							today and I'm going to be quarantined.
						</p>
						<hr></hr>
						<p>
							PCR test! I feel like this is one of the few reasons I can get
							out. I live in this rental apartment with my two roommates. We may
							be recent graduates, maybe we are just a few of the people who
							came to the city from another part of the country to work, maybe
							my two roommates and I should not have known each other except for
							the intersection of living. But at least we have a harmonious life
							together, and they both add a lot of fun to my life. At least I
							have someone to talk to when I go home. My roommates, just like
							me, don't like to go out in their spare time, probably because we
							live in a building with everything we need. If you want to have
							some good food, just order delivery, if you want to exercise, you
							can do it in the building, if you want to have fun, we like to
							play games at home, and we can even do our own work at home. It
							seems less necessary to go out, right? The world outside the
							window is still in the pandemic, and I sometimes fantasize that
							this box of concrete, steel and glass can isolate me from the
							outside world and that what happens outside of the window may
							never have anything to do with me. But the reality is not like
							this. Outside of a box, there is another box, the city is a big
							box, there are more people in this big box. And everyone seems to
							be the gears that provide the power for the city to run, connected
							to each other, but there is no need to know each other. If one
							gear has an abnormality, the other gears can't run properly,
							right? This is how things have been going since the first year of
							the pandemic, and I have been involved in it for a long time,
							doing PCR tests and not being able to avoid it, even without going
							out. You ask me if it is possible to live my life differently
							before the pandemic started. Of course, it is possible, but that
							doesn't matter anymore. The pandemic has changed everyone's life,
							changed the way they live. Three days ago, I had my PCR test as
							usual. For three days, I am at home, spending time with my
							roommates or working on our own stuff, or taking care of a few
							potted plants at home. Three days later, I don’t know why I
							received the notification that the test result was positive. Maybe
							it's the same as I think at the beginning, the gears, we are all
							closely connected but far apart gears, silently turning, running
							for the end result that I may not see. I'm going to be
							quarantined, leave this home for a while. Perhaps my work, my
							entertainment can also continue in another room, another box.
						</p>
						<hr></hr>
						<p>
							What is the joy of family? When I was young, I heard people say
							many times that when I retired, I would be able to enjoy my
							family's happiness. I live with my grandchildren because my child
							is usually busy with work, so I come to help them with their
							children. I am delighted to see my grandchild growing up happily.
							School has just started recently, and the summer is over, so I'm
							sending my grandson to school again. In fact, I sometimes worry
							that the pandemic is so serious that I think we should not start
							the school year and how dangerous it is for the children to go
							back to school. I told my grandchild not to take off that mask
							when he is in school. The day begin for me as I watched my
							grandchild walk happily into school. I have to go for a PCR test,
							the pandemic over the past few years has almost become a habit,
							and I do not feel any inconvenience, except, sometimes, the line
							of people is a little long. But I'm retired, and there's nothing
							for me to really rush to finish. The recent pandemic is so serious
							that I heard that I have to get my PCR done for several days
							because there have been too many positive people in our city
							lately. I also heard that I am a close contact, so I am being
							managed in a focused way. I'm not afraid to go to quarantine, I
							saw some videos of people singing and dancing in the hospital
							before, and it didn't seem so bad, right? Obeying the government's
							decision is one of the few things we can do now. After all, we
							don't have the knowledge of experts to understand the disease.
							After a few days of continuous PCR tests, I am positive for the
							virus, and I am going to be quarantined. I hope my child can take
							care of their children well.
						</p>
						<hr></hr>
						<p>
							There is a park near my house that was built for the victims of
							the earthquake. I sometimes go to that park for a walk, maybe
							because that earthquake is related to my personal experience, or
							maybe I just want to have a place to breathe. When you reach
							middle age, you are probably under more pressure than when you are
							young. I've been walking around the park, and I'm likely to get
							immersed in the environment without realizing it. Sometimes I
							ramble, watch and think in this park, and a few hours pass. From
							the sunset until the city lights turned on, I slowly went home.
							Back home, the warmth of home is a good place to end the day. When
							I woke up, life seemed to have taken a few twists and turns, and
							we were all in close contact with a positive patient. We couldn't
							leave the house for the next few days until we were sure we
							weren't at risk of infection. What does quarantine mean to me? I
							can’t go to work, either my wife, my kids can't go to school, and
							my mom will be forced to stay at home. Our whole family's life
							will have to be put on hold. Am I scared, you ask? To be honest,
							maybe I'm a little scared, but what can I do? The big picture is
							important. Just like the earthquake, there is probably no shortage
							of heroes around us, so let's focus on the big picture. This time,
							I can probably guess the result of the PCR test, it is positive, I
							am going to be quarantined, my whole family will all have to go to
							quarantine. I can't do anything about it.
						</p>
						<hr></hr>
						<p>
							Each individual in the city is like a grain of sand, we all exist
							alone anyway. You can say that no grain of sand is the same; you
							can also say that no snowflake is the same. Our lives are
							different but may be similar at some point. You carefully pick up
							two sand grains from the seaside and look at them carefully under
							a magnifying glass. You find that there seems to be some
							resemblance between them when viewed from certain angles. Maybe
							it's the material, or maybe it's the weathered edges. I wonder if
							you have ever suspected at some point that these two sands were
							from the same millions of years ago, but you just don't know how
							they split into two. Maybe all sands were originally one giant
							sand, for some reasons, who knows how many separate individuals it
							was divided into, or maybe there was no sand in this world in the
							first place. Our lives are different, but perhaps it is the
							arrangement of fate, the overlapping trajectories of the complex
							possibilities that arise. But it is the few overlaps that allow
							each other who travel separately to the same destination.
						</p>
						<p>
							To be honest, we never thought about getting to know each other,
							nor did we know in what way we would get to know each other. We
							tried to think about what made us all end up being the same, was
							it because we lived close together? I don't know who among us
							changed my destiny, and sometimes I wonder again if it makes sense
							to ask such questions. I don't understand, and I don't want to
							understand, and I can't understand. Do you think I should be
							angry?
						</p>
						<p>
							We live in different parts of the city, we have different
							occupations in society, and our families are made up of various
							members. What makes us so alike? What makes our lives intersect?
							It is not difficult to understand that although our lives seem to
							be different, we cannot escape from the basic human need—to eat.
							Each of us, and I mean each of us, has to work hard for food,
							maybe buying groceries at the supermarket, maybe eating at a
							restaurant. The unavoidable actions that we take create an
							inevitable intersection. Do you think I should self-blame?
						</p>
						<p>
							In fact, other parts of our lives make us become the target of the
							public. I'm curious what that means, being asymptomatic positive.
							What do you think? I think the first thing is that we can't
							realize we are carrying the virus. We feel good, we feel normal.
							Crafty virus! If we feel sick, we probably won't buy groceries for
							our family, and if we feel sick, we probably won't even leave the
							house. The tricky virus, using me as a carrier, using me to hurt
							others without hurting me. That's what you think, don’t you? Do
							you think I should feel guilty?
						</p>
						<p>
							By the way, my "friend" talked to me the other day. If that's how
							you want to refer to our relationship. I didn't know this person
							before but as I said, we became the same kind of people. Anyway,
							my "friend" told me that day that he would go out even if he felt
							sick. I asked him where he had gone that day. He told me that he
							had gone to a funeral. I didn't know what it meant to him, a
							funeral for a loved one or a funeral for something else? I didn't
							dare to ask more. After all, the type of funeral would not change
							the nature of his grief. A funeral! Let me think about that, if I
							was sick, would I attend this funeral? Would I pass this disease
							on to others, so that the sadness already present at the funeral
							would become a mixture of pity, anger, and grief? I didn't dare to
							think about it, but on the day my "friend" attended that funeral,
							I went to the mall to buy gifts for my family members who were
							expecting a birthday party. I had a wonderful day.
						</p>
						<p>
							Speaking of which, you may have forgotten, or maybe I didn't tell
							you, that we are forty-four individuals, forty-four individuals
							talking to you together, forty-four families. It's hard to believe
							when I know what everyone else has been up to these days. Our
							lives are moving in different directions, there are some points of
							intersection, but our lives are so different. I thought our lives
							were not comparable, I thought we were the denominations of our
							own lives, but yesterday, all of our lives took a pause. When I
							say pause, I mean forty-four of us, all at home, not going
							anywhere, not doing anything! It seems that since yesterday,
							everything we need to accomplish has disappeared. The trivial
							things in life have disappeared without a trace, leaving only one
							important thing. I don't know if I should complain. The education
							I received from a young age tells me that the big picture is the
							most important thing. Do you think sacrificing what I want to do
							and taking me to quarantine will save my city? When I think about
							it, my "friend" should be considered lucky that day of the
							funeral. How should we say goodbye if the funeral is delayed? Can
							he still go? Is the death of a life predictable?
						</p>
						<p>
							The bustling marketplace is a symbol of people's happiness and
							abundance. When everyone still has their own life and purpose, it
							seems that prosperity never stops. I sometimes feel that society
							is a huge machine that can't stop running, maybe going on forever,
							possibly breaking through all kinds of obstacles. I'm afraid no
							force can counteract the inertia of this machine when it stops! A
							force made up of us ordinary people. But I wonder, although our
							lives are different, is there really any difference? I mean, when
							that person went to the breakfast place on the east side of the
							town and I went to the breakfast place on the west side of the
							city, it seemed that our lives were only different in terms of
							location, but we were all just running around trying to survive,
							and I don't know how to explain that strange and familiar feeling.
							Can flesh and blood be built into a new great wall, an
							impenetrable wall of steel? Or is it that, as we follow the flood,
							the flood of life, is actually a river that has been diverted? The
							endless flow of the river seems unstoppable, but the water, is it
							just in the established journey to the destination that has been
							planned? I don't understand, I'm just an ordinary person. I
							sometimes feel that I am a feather, and we are all the same
							feather as me. One feather flies towards you without any weight.
							Forty-four feathers fly together toward you without any weight. A
							light net can change the flight path of a feather and even trap
							it, right?
						</p>
						<p>"Stop!"</p>
						<p>
							With a single command, the lives of forty-four of us stop
							immediately, without the slightest hesitation, without the
							slightest choice.
						</p>
						<p>"Quarantine!"</p>
						<p>
							Again, forty-four of us without the slightest hesitation, without
							the slightest choice. Perhaps we can all shout out the same phrase
							together: I'm going to be quarantined.
						</p>
					</div>
				)}
			</div>
		</>
	);
}
