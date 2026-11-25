(() => {
  "use strict";

  const VALUES = [100, 200, 300, 400, 500];
  const STORAGE_KEY = "weijing_jeopardy_state_v3";

  const PRESET_DECKS = {
    weijing: {
      name: "Wei Jing's Favorites & Blind Spots (Trivia) ✨",
      categories: [
        {
          title: "1. Chemistry & Weird Science ⚗️",
          clues: [
            {
              clue: "Which silver metal is liquid at room temperature—and which eerie metal (atomic number 31) sits solid on a lab table, yet melts into a puddle right in the palm of your hand at 29.8°C?",
              answer: "Mercury (liquid at room temperature) and Gallium (melts in your hand)!",
              chinese: "水银/汞（Mercury，常温液态）与镓（Gallium，31号元素，熔点29.8°C，握在手心就会融化）！"
            },
            {
              clue: "Because the organic molecule 'carvone' is chiral (non-superimposable left- and right-handed enantiomers), human scent receptors smell its two mirror twins as two completely different foods. Name at least ONE of the two scents!",
              answer: "R-(-)-carvone smells like Spearmint, while its exact mirror image S-(+)-carvone smells like Caraway seeds (rye bread / dill)!",
              chinese: "手性对映异构体：左旋香芹酮闻起来是绿薄荷（Spearmint），而它的镜像右旋分子闻起来却是葛缕子/黑麦面包香料（Caraway）！"
            },
            {
              clue: "Everyone knows diamond and graphite are pure carbon—but in 1985, chemists won a Nobel Prize for discovering 'C60', a hollow cage of 60 carbon atoms shaped exactly like a classic football. What is it called?",
              answer: "Buckminsterfullerene — nicknamed a 'Buckyball'!",
              chinese: "富勒烯 / 巴克球（Buckminsterfullerene / Buckyball，C60 足球烯）！"
            },
            {
              clue: "Why does inhaling helium make your voice sound like a cartoon chipmunk—even though helium does NOT actually change the vibration frequency (pitch) of your vocal cords at all?",
              answer: "Sound travels nearly 3× faster through lighter helium than air—shifting the resonant frequencies (timbre/formants) of your throat and mouth while vocal-cord pitch stays identical!",
              chinese: "声带振动频率其实完全没变！因为声音在轻质氦气中传播速度比空气快近3倍，改变了口腔声道的共振峰（音色），听起来才像花栗鼠！"
            },
            {
              clue: "Gold refuses to dissolve in nitric acid OR hydrochloric acid alone—yet a fuming 1:3 mixture of both dissolves solid gold (and famously hid two Nobel Prize medals from Nazi soldiers in 1940!). What is its Latin name meaning 'royal water'?",
              answer: "Aqua Regia! (Chemist George de Hevesy dissolved two gold Nobel medals into an orange beaker of Aqua Regia on his shelf—and precipitated the gold back out after WWII!)",
              chinese: "王水（Aqua Regia，拉丁语意为“皇家之水”）！二战时化学家赫维西把两枚诺贝尔纯金奖章溶解在王水烧杯里躲过搜查，战后又还原重铸！"
            }
          ]
        },
        {
          title: "2. Silicon, Logic & Paradoxes 🧠",
          clues: [
            {
              clue: "In 1947, engineers troubleshooting the Harvard Mark II computer taped a real dead insect into their lab logbook—popularizing the term 'debugging.' What insect was stuck inside Relay #70?",
              answer: "A moth!",
              chinese: "一只飞蛾（Moth）卡在了70号继电器里——工程师把它贴进实验日志，造就了“debugging”一词！"
            },
            {
              clue: "To print modern 2nm and 3nm microchips, only ONE Dutch company on Earth builds the $350-million Extreme Ultraviolet (EUV) lithography machines—firing lasers at falling droplets of molten tin 50,000 times per second. Name that company!",
              answer: "ASML!",
              chinese: "荷兰阿斯麦（ASML）——全球唯一能制造极紫外光刻机（EUV）的公司！"
            },
            {
              clue: "The Monty Hall Paradox: Behind 3 doors are 1 sports car and 2 goats. You pick Door #1. The host (who knows where the car is) opens Door #3 to show a goat, then offers to let you switch to Door #2. What is your exact probability of winning if you SWITCH?",
              answer: "2/3 (66.7%)! Staying locks in your initial 1/3 guess, whereas switching captures the full 2/3 probability!",
              chinese: "三门问题（Monty Hall Paradox）：换门中奖概率高达 2/3（66.7%），不换只有 1/3！"
            },
            {
              clue: "At the physical limit of Moore's Law, why can silicon transistors not shrink below ~1 nanometer without electrons mysteriously 'ghosting' straight through closed barriers even when the gate is switched OFF?",
              answer: "Quantum Tunneling! At sub-nanometer thicknesses, electrons act as probability waves and tunnel right through insulating oxide walls, creating leakage current.",
              chinese: "量子隧穿效应（Quantum Tunneling）！在1纳米以下尺度，电子表现出波粒二象性，会直接“穿墙”越过绝缘势垒造成漏电。"
            },
            {
              clue: "The Birthday Paradox: In a room of random strangers, what is the MINIMUM number of people needed so there is MORE than a 50% probability that two of them share the exact same birthday (month & day)?",
              answer: "Just 23 people! (23 people = 50.7% chance because there are 253 unique pairs to compare; by 70 people it hits 99.9%!)",
              chinese: "生日悖论：只需要 23 个人！（23人两两配对共有253种组合，撞生日概率已达50.7%！）"
            }
          ]
        },
        {
          title: "3. Hidden Japan & Martial Arts 🗾🥋",
          clues: [
            {
              clue: "In Tokyo, commuters stand neatly on the LEFT side of escalators—yet if you ride the bullet train 2.5 hours west to Osaka, everyone stands on the RIGHT! Which global mega-event in 1970 caused Osaka to flip sides?",
              answer: "The 1970 Osaka World Expo (Expo '70)—Osaka adopted Western right-side standing for millions of international visitors and never switched back!",
              chinese: "1970年大阪世博会（Expo '70）！当时为了迎合欧美游客习惯改为靠右站立，结果一直保留至今，与东京截然相反！"
            },
            {
              clue: "Tokyo was originally a castle town under a completely different 3-letter name until 1868, when Emperor Meiji moved the capital from Kyoto and renamed it 'Eastern Capital.' What was Tokyo's old name?",
              answer: "Edo! (Giving its name to Japan's Edo Period, 1603–1868, and 'Edomae' sushi!)",
              chinese: "江户（Edo）！1868年明治维新迁都后才改名为“东京（东边的京城）”！"
            },
            {
              clue: "In martial arts biomechanics, a Taekwondo side kick or spinning hook kick delivers 3–4× the force of a punch—and fighters let out a sharp shout ('kihap') at the millisecond of impact. Physiologically, what does that sharp exhale do?",
              answer: "It violently contracts the diaphragm and core wall—locking the torso rigid for maximum kinetic force transfer AND shielding internal organs against a counterstrike!",
              chinese: "发声吐气能瞬间收紧横膈膜与核心肌群，使躯干刚性化以最大化力量传导，同时在遭到反击时保护内脏！"
            },
            {
              clue: "Why did Tokyo remove almost all public street trash bins in 1995 (forcing visitors in Shibuya and Ueno to carry wrappers in their bags)—even though the city remains spotless?",
              answer: "For security after the 1995 Tokyo subway sarin attack—and centuries of 'Mottainai' / take-your-trash-home civic responsibility kept the streets clean without bins!",
              chinese: "源于1995年东京地铁沙林毒气事件后的反恐安保措施，加上日本“垃圾自己带回家”的公民习惯，让街头无桶依然洁净！"
            },
            {
              clue: "Green Aurora Borealis curtains come from solar particles striking oxygen ~100–200 km up. During extreme geomagnetic storms, what creates the ultra-rare blood-RED tops and electric-VIOLET lower fringes?",
              answer: "High-altitude atomic oxygen (>240 km up) glows rare crimson RED, while ionized nitrogen molecules lower down (~90–100 km) emit blue and violet-purple!",
              chinese: "240公里以上高空稀薄氧原子发出罕见深红光，而90–100公里低空电离氮分子则发出蓝紫色光边！"
            }
          ]
        },
        {
          title: "4. Movies, Cinema & Pop Culture 🎬🍿",
          clues: [
            {
              clue: "In the 1999 sci-fi classic 'The Matrix', Morpheus offers Neo a choice between two colored pills. What happens if you swallow the BLUE pill vs. the RED pill?",
              answer: "The blue pill lets you wake up in bed and stay inside the simulated Matrix; the red pill wakes you up to the harsh real world!",
              chinese: "1999年经典科幻片《黑客帝国》：吃下蓝药丸（Blue Pill）会继续留在虚拟梦境中；吃下红药丸（Red Pill）则会醒来面对残酷的真实世界！"
            },
            {
              clue: "For Christopher Nolan's 2014 sci-fi epic 'Interstellar', the director hired Nobel Prize-winning physicist Kip Thorne to mathematically simulate the black hole 'Gargantua'—rendering frames so accurately that the movie's CGI team actually published what?",
              answer: "Real peer-reviewed astrophysics papers! Their visual simulation revealed new insights into gravitational lensing around spinning black holes.",
              chinese: "特效团队与诺贝尔物理学奖得主基普·索恩合作模拟黑洞“卡冈图雅”，精确到竟然因此发表了真正的天体物理学学术论文！"
            },
            {
              clue: "Which 2001 Studio Ghibli masterpiece—directed by Hayao Miyazaki—remains the ONLY hand-drawn, non-English-language film in history to win the Academy Award for Best Animated Feature?",
              answer: "Spirited Away (千と千尋の神隠し / 《千与千寻》)!",
              chinese: "宫崎骏导演的《千与千寻》（Spirited Away，2001）——奥斯卡史上唯一一部获奖的手绘非英语动画长片！"
            },
            {
              clue: "During the filming of 'The Lord of the Rings: The Two Towers', actor Viggo Mortensen (Aragorn) kicks an iron Uruk-hai helmet in anger and lets out a gut-wrenching scream. Why did director Peter Jackson keep that exact take in the final movie?",
              answer: "Mortensen actually broke two toes on the real metal helmet—so the agony in his scream was 100% genuine!",
              chinese: "《指环王2：双塔奇兵》中，饰演阿拉贡的维果·莫滕森一脚踢飞铁头盔时真的踢断了两根脚趾——电影里那声撕心裂肺的惨叫完全是真实痛感！"
            },
            {
              clue: "During World War II (1942–1945), severe metal shortages meant the Academy couldn't cast Oscar statuettes in gold-plated bronze. What humble material were wartime Oscars made from instead?",
              answer: "Painted plaster! (Winners were allowed to trade their plaster Oscars in for real metal ones after the war ended.)",
              chinese: "二战期间因金属紧缺，1942–1945年的奥斯卡小金人竟然是用涂了金漆的石膏（Plaster）做的，战后才陆续换成金属底座！"
            }
          ]
        },
        {
          title: "5. Christmas & Holiday Trivia 🎄🎅",
          clues: [
            {
              clue: "Which famous red-nosed reindeer wasn't in the original 1823 poem ''Twas the Night Before Christmas'—and was actually invented in 1939 as a free promotional coloring-book character for a Chicago department store?",
              answer: "Rudolph the Red-Nosed Reindeer! (Created by copywriter Robert L. May for Montgomery Ward.)",
              chinese: "红鼻子驯鹿鲁道夫（Rudolph）！它并非来自古老神话，而是1939年芝加哥一家百货公司为了免费涂色绘本营销才创作出来的！"
            },
            {
              clue: "Every December, the internet fiercely debates whether a certain 1988 Bruce Willis action blockbuster—set at an office Christmas Eve party inside Los Angeles' Nakatomi Plaza—officially counts as a Christmas movie. Name it!",
              answer: "Die Hard! (Yippee-ki-yay!)",
              chinese: "1988年布鲁斯·威利斯主演的动作经典《虎胆龙威（Die Hard）》——故事就发生在圣诞夜的公司派对大厦里！"
            },
            {
              clue: "In Japan, millions of families celebrate Christmas Eve by pre-ordering special party buckets of fried chicken weeks in advance—thanks to a wildly successful 1974 ad campaign by which American fast-food chain?",
              answer: "KFC (Kentucky Fried Chicken)! Their 'Kurisumasu ni wa Kentakkii!' ('Kentucky for Christmas!') campaign turned fried chicken into Japan's #1 Xmas tradition.",
              chinese: "肯德基（KFC）！1974年“圣诞节就要吃肯德基”的广告爆火，从此提前预订肯德基圣诞全家桶成了日本全民圣诞传统！"
            },
            {
              clue: "Many people think 'Xmas' is lazy modern internet slang—but the 'X' actually comes from an ancient language and has been used by scholars for over 1,000 years. Which letter and language does 'X' represent?",
              answer: "The Greek letter Chi (Χ), the first letter of 'Christos' (Χριστός, Christ) in Greek—used by medieval scribes as a reverent shorthand!",
              chinese: "“Xmas”并非现代网络懒人缩写！其中的“X”其实是希腊字母 Chi（Χ），是希腊语“基督（Christos）”的首字母，中世纪抄写员已用了上千年！"
            },
            {
              clue: "On Christmas Eve 1914 during World War I, German and British soldiers along the Western Front spontaneously stopped firing, sang 'Silent Night' together, traded chocolates, and even played a game of what sport in No Man's Land?",
              answer: "Football (soccer)! Known in history as the 'Christmas Truce of 1914.'",
              chinese: "1914年一战“圣诞休战（Christmas Truce）”：英德士兵在平安夜停火走出战壕，合唱《平安夜》并一起踢了一场足球（Football/Soccer）！"
            }
          ]
        },
        {
          title: "6. Western Blind Spots & Subtext 🎭🇬🇧",
          clues: [
            {
              clue: "Where did the English idiom 'spill the beans' (meaning to accidentally leak confidential news) supposedly originate in ancient Greece?",
              answer: "Secret ballot jars! Ancient Greeks voted by dropping white or dark beans into a clay urn—knocking the jar over literally 'spilled the beans' and exposed the vote!",
              chinese: "源于古希腊秘密投票！古希腊人往陶罐里投黑白豆子表决，一旦打翻罐子（spill the beans），秘密投票结果就提前泄露了！"
            },
            {
              clue: "British Corporate Subtext: If you pitch an ambitious chip schedule in London and a British director smiles warmly and says, 'Well, that is a VERY brave proposal,' what do they ACTUALLY mean?",
              answer: "'You are out of your mind—that plan is practically guaranteed to end in disaster!'",
              chinese: "英式职场潜台词：“That's very brave（这想法真勇敢）”实际意思是“你疯了吧，这方案绝对会惨败”！"
            },
            {
              clue: "Westerners constantly call no-win circular traps a 'Catch-22' (e.g., needing experience to get hired, yet needing to get hired to gain experience). What 1961 story invented 'Catch-22', and what was the trap?",
              answer: "Joseph Heller's WWII novel 'Catch-22': bomber pilots could be excused from deadly flights only if declared insane—but asking to avoid danger proved you were rational and sane!",
              chinese: "约瑟夫·海勒二战小说《第22条军规（Catch-22）》：飞行员只有疯了才能停飞，但主动申请停飞恰好证明你神志清醒没疯！"
            },
            {
              clue: "Why is unwanted junk email called 'SPAM' (originally a brand of canned spiced ham)—and which legendary 1970s British comedy group accidentally inspired hackers to name it that?",
              answer: "Monty Python! In a famous 1970 café sketch, a table of Vikings drowns out every normal conversation by loudly singing 'Spam, Spam, Spam, Spam!' nonstop!",
              chinese: "源于英国传奇喜剧团 Monty Python 1970年的餐厅小品：一群维京人不停高唱“Spam! Spam!”，淹没了正常对话，就像垃圾邮件刷屏一样！"
            },
            {
              clue: "Calling a costly, useless project you can't get rid of a 'White Elephant' comes from a real Southeast Asian royal punishment! Why did ancient Kings of Siam gift sacred white elephants to courtiers who displeased them?",
              answer: "Sacred white elephants couldn't legally be put to work or given away, yet cost a fortune to feed and pamper—politely bankrupting the recipient!",
              chinese: "“白象工程（White Elephant）”源于古暹罗国王的暗中惩罚：神圣白象既不能干活也不能转送，高昂饲养费足以让失宠大臣倾家荡产！"
            }
          ]
        }
      ],
      final: {
        category: "NOBEL PRIZE & SCIENTIFIC HISTORY 🏆",
        clue: "Only ONE person in history has ever won Nobel Prizes in TWO DIFFERENT SCIENCES (Physics in 1903, then Chemistry in 1911)—and even today, her 120-year-old lab notebooks in Paris must be kept inside lead-lined boxes because they remain radioactive for another 1,500 years. Name her—and name ONE of the two elements she discovered!",
        answer: "Marie Curie! She discovered Polonium (named after her homeland, Poland) and Radium!",
        chinese: "玛丽·居里（居里夫人）！她是史上唯一包揽两门不同自然科学诺奖的科学家，发现了钋（Polonium，纪念祖国波兰）和镭（Radium），手稿至今仍需保存在铅盒中！"
      }
    },

    vinh: {
      name: "Vinh's Fishing & World History Jeopardy 🎣🌍",
      categories: [
        {
          title: "1. Reel Talk: Fishing Trivia 🎣",
          clues: [
            {
              clue: "Nicknamed 'Ol' Bucketmouth' by American anglers, which freshwater fish is the #1 most popular sport fish in the U.S. (including Virginia lakes)?",
              answer: "Largemouth Bass! (Its mouth opens wide enough to swallow prey half its own size.)",
              vietnamese: "Loài cá nước ngọt thể thao phổ biến nhất nước Mỹ (đặc biệt ở hồ Virginia), nổi tiếng với cái miệng cực rộng."
            },
            {
              clue: "In fly and lure fishing, what does the classic golden rule 'Match the hatch' mean?",
              answer: "Choosing a lure or fly that copies the exact insects, baitfish, or food that fish are eating in that water right now!",
              vietnamese: "Quy tắc chọn mồi giả giống hệt côn trùng hoặc cá con mà cá đang ăn ngoài tự nhiên ngay lúc đó."
            },
            {
              clue: "Along Vietnam's central coast, what iconic round, woven bamboo boat—steered with a single front oar—has been used by fishermen for centuries?",
              answer: "Thúng chai (Vietnamese bamboo basket boat / coracle)!",
              vietnamese: "Chiếc thuyền tròn đan bằng tre đặc trưng của ngư dân miền Trung Việt Nam."
            },
            {
              clue: "In 2022, fishermen in the Mekong River caught and released a 300 kg (661 lb) giant—officially setting the Guinness World Record for the heaviest freshwater fish ever documented. What was it?",
              answer: "A Giant Freshwater Stingray! (Passing the Mekong Giant Catfish!)",
              vietnamese: "Cá đuối nước ngọt khổng lồ sông Mê Kông (300 kg, phá kỷ lục của cá tra dầu)."
            },
            {
              clue: "In British angling, fishing for carp, pike, and perch is called 'coarse fishing' (vs. trout/salmon 'game fishing'). Where did the word 'coarse' come from?",
              answer: "19th-century British upper classes called trout/salmon 'game fish' and looked down on other freshwater fish as 'coarse' (ordinary/rough)—today UK coarse anglers practice strict catch-and-release!",
              vietnamese: "Thế kỷ 19, giới quý tộc Anh coi cá hồi là 'game fish' cao cấp, còn cá chép/cá vược là cá thường ('coarse'). Ngày nay dân câu Anh đều bắt-rồi-thả."
            }
          ]
        },
        {
          title: "2. Wild UK History 🇬🇧",
          clues: [
            {
              clue: "In October 1066, William the Conqueror sailed from Normandy and defeated King Harold II to change the English language and monarchy forever. Name that famous battle!",
              answer: "The Battle of Hastings (1066)!",
              vietnamese: "Trận chiến năm 1066 khi William kẻ chinh phục đánh bại vua Harold II và thay đổi lịch sử nước Anh."
            },
            {
              clue: "What famous 1215 document—forced upon King John by rebellious barons at Runnymede—established for the first time that even the King is NOT above the law?",
              answer: "Magna Carta (The Great Charter)!",
              vietnamese: "Đại Hiến Chương năm 1215 buộc Vua John phải ký, khẳng định ngay cả nhà vua cũng phải tuân theo pháp luật."
            },
            {
              clue: "In 1605, Guy Fawkes was caught guarding 36 barrels of gunpowder beneath Parliament. How do Britons still remember that failed plot every November 5th?",
              answer: "Bonfire Night / Guy Fawkes Night—with fireworks, giant bonfires, and burning 'Guy' effigies!",
              vietnamese: "Đêm lửa trại & pháo hoa (Bonfire Night / Guy Fawkes Night) vào ngày 5/11 hàng năm ở Anh."
            },
            {
              clue: "In 1666, a fire started in a bakery on Pudding Lane and destroyed 13,000 London houses—yet historians note one huge silver lining. How did the Great Fire accidentally help Londoners?",
              answer: "It wiped out crowded medieval slums and helped end the Great Plague of London (killing the rats and fleas)!",
              vietnamese: "Trận đại hỏa hoạn London 1666 vô tình thiêu rụi ổ chuột và chấm dứt Đại dịch hạch."
            },
            {
              clue: "In September 1752, Britain went straight from September 2nd to September 14th—inspiring legends of angry crowds yelling 'Give us our 11 days!' Why did 11 days vanish?",
              answer: "Britain finally switched from the old Julian calendar to the Gregorian calendar to match the rest of Europe!",
              vietnamese: "Nước Anh chuyển từ lịch Julius sang lịch Gregory (dương lịch ngày nay) để đồng bộ với châu Âu nên nhảy cóc 11 ngày."
            }
          ]
        },
        {
          title: "3. Surprising US History 🇺🇸",
          clues: [
            {
              clue: "In 1803, the U.S. doubled its size overnight by buying 828,000 square miles from France for $15 million (~3 cents an acre). What was this massive real-estate deal called?",
              answer: "The Louisiana Purchase!",
              vietnamese: "Thương vụ mua lại vùng Louisiana từ Pháp năm 1803, giúp nước Mỹ tăng gấp đôi diện tích chỉ với 15 triệu USD."
            },
            {
              clue: "Which U.S. President worked as a Dakota cattle rancher, led the 'Rough Riders', and inspired the 'Teddy Bear' after refusing to shoot a tied-up bear on a hunting trip?",
              answer: "Theodore ('Teddy') Roosevelt!",
              vietnamese: "Tổng thống Mỹ truyền cảm hứng cho tên gọi gấu bông 'Teddy Bear' sau chuyến đi săn."
            },
            {
              clue: "Right next to Bristow and Ashburn in Northern Virginia, the very first major land battle of the U.S. Civil War took place in July 1861 (with picnic spectators watching!). What was it called?",
              answer: "The Battle of Bull Run (First Manassas)!",
              vietnamese: "Trận chiến lớn đầu tiên trên bộ của Nội chiến Mỹ (tháng 7/1861), diễn ra ngay gần vùng Bristow / Ashburn ở Bắc Virginia."
            },
            {
              clue: "In 1867, critics mocked Secretary of State William Seward for spending $7.2 million on a frozen land bought from Russia, calling it 'Seward's Folly.' What U.S. state did he buy?",
              answer: "Alaska! (Later famous for gold, oil, and world-class salmon fishing!)",
              vietnamese: "Bang Alaska—mua từ Nga năm 1867 với giá 7,2 triệu USD, từng bị chê là 'sự điên rồ của Seward'."
            },
            {
              clue: "In 1969, a U.S. Defense research project called ARPANET sent its very first message ('LO'—it crashed before finishing 'LOGIN') between two California universities. What did ARPANET become?",
              answer: "The Internet! (Which now flows right through Northern Virginia's data centers!)",
              vietnamese: "Mạng ARPANET năm 1969 là tiền thân trực tiếp của mạng Internet ngày nay!"
            }
          ]
        },
        {
          title: "4. Untold Europe History 🇪🇺",
          clues: [
            {
              clue: "Nearly 500 years before Columbus sailed in 1492, which Scandinavian seafarers—led by Leif Erikson around the year 1000—built a settlement in North America?",
              answer: "The Vikings (Norse explorers, in Newfoundland / 'Vinland')!",
              vietnamese: "Người Viking (Bắc Âu), dẫn đầu bởi Leif Erikson, đã đặt chân tới Bắc Mỹ gần 500 năm trước Columbus."
            },
            {
              clue: "In 1494, the Treaty of Tordesillas split the newly explored world between Spain and Portugal—explaining why ONE giant South American country speaks Portuguese instead of Spanish. Which country?",
              answer: "Brazil!",
              vietnamese: "Hiệp ước Tordesillas (1494) chia đôi Tân Thế Giới giữa Tây Ban Nha và Bồ Đào Nha—lý do Brazil nói tiếng Bồ Đào Nha."
            },
            {
              clue: "In 1637 in the Netherlands, one rare flower bulb briefly traded for the price of a luxury Amsterdam canal house before crashing overnight. What caused history's first financial bubble?",
              answer: "Tulips ('Tulip Mania')—a classic finance story!",
              vietnamese: "Bong bóng hoa Tulip ('Tulip Mania') năm 1637 ở Hà Lan—bong bóng tài chính nổi tiếng đầu tiên trong lịch sử!"
            },
            {
              clue: "Before the Euro launched in 1999, European travelers juggled Marks, Francs, Lira, and Pesetas. Which 1992 Dutch-city treaty created the European Union and set the path to the Euro?",
              answer: "The Maastricht Treaty!",
              vietnamese: "Hiệp ước Maastricht (1992) khai sinh Liên minh châu Âu (EU) và đặt nền móng cho đồng tiền chung Euro."
            },
            {
              clue: "After a massive volcano eruption caused Europe's freezing 'Year Without a Summer' in 1816, an 18-year-old British writer stuck indoors at Lake Geneva invented which famous monster story?",
              answer: "Frankenstein (by Mary Shelley)!",
              vietnamese: "Tiểu thuyết 'Frankenstein' do Mary Shelley sáng tác năm 18 tuổi khi bị kẹt trong nhà vì mùa hè băng giá năm 1816 tại Thụy Sĩ."
            }
          ]
        },
        {
          title: "5. Epic Vietnam History 🇻🇳",
          clues: [
            {
              clue: "In 938 AD, General Ngô Quyền lured an invading Southern Han fleet over hidden iron-tipped wooden stakes at high tide, ending 1,000 years of northern rule. Where was this legendary trap?",
              answer: "The Bạch Đằng River!",
              vietnamese: "Trận thủy chiến sông Bạch Đằng năm 938 của Ngô Quyền—chấm dứt hơn 1.000 năm Bắc thuộc."
            },
            {
              clue: "In 1010 AD, Emperor Lý Thái Tổ moved the royal capital to Thăng Long ('Ascending Dragon') after seeing a golden dragon rise from the Red River. What is that city called today?",
              answer: "Hanoi!",
              vietnamese: "Kinh đô Thăng Long năm 1010 (Chiếu dời đô của Lý Thái Tổ), ngày nay chính là Hà Nội."
            },
            {
              clue: "Around 600 BC–200 AD, northern Vietnam's Đông Sơn culture cast massive bronze instruments decorated with sun rays, boats, and flying birds. What are these iconic treasures called?",
              answer: "Đông Sơn Bronze Drums (Trống đồng Đông Sơn)!",
              vietnamese: "Trống đồng Đông Sơn—biểu tượng rực rỡ của nền văn minh Việt cổ."
            },
            {
              clue: "In 40 AD, two heroic sisters led an uprising against Han rule—famously riding war elephants into battle and ruling an independent Vietnam for three years. Who were they?",
              answer: "The Trưng Sisters (Hai Bà Trưng — Trưng Trắc & Trưng Nhị)!",
              vietnamese: "Hai Bà Trưng (Trưng Trắc và Trưng Nhị)—khởi nghĩa năm 40 sau Công nguyên."
            },
            {
              clue: "Long before modern Da Nang or Ho Chi Minh City, which central Vietnamese port city thrived in the 16th–17th centuries as a trading hub for Japanese, Chinese, and European silk & spice merchants?",
              answer: "Hội An (famous for its Ancient Town & Japanese Covered Bridge)!",
              vietnamese: "Thương cảng Hội An (Faifo) thế kỷ 16–17—nơi giao thương sầm uất của thương nhân Nhật, Hoa và châu Âu."
            }
          ]
        }
      ],
      final: {
        category: "WORLD HISTORY & ANGLER'S FINALE 🎣🌍",
        clue: "In 1621, the Pilgrims at Plymouth nearly starved during their first winter until a Native American named Squanto taught them to catch local river fish (alewives) and bury them in the soil next to corn seeds. Why did Squanto use fish?",
        answer: "As natural fertilizer! The fish nourished the soil, producing a huge harvest and leading to the first Thanksgiving!",
        vietnamese: "Làm phân bón tự nhiên! Cá giúp đất màu mỡ hơn, tạo nên mùa màng bội thu và lễ Tạ ơn đầu tiên."
      }
    },

    giulia: {
      name: "Giulia's Fluency & Sales Pitch Jeopardy 🇮🇹",
      categories: [
        {
          title: "1. Go + -ing vs Go To",
          clues: [
            {
              clue: "Choose the clean form: 'Every Saturday I go ___ (to shopping / shopping), and on Tuesday I go ___ (the gym / to the gym).'",
              answer: "Every Saturday I go shopping, and on Tuesday I go to the gym.",
              italian: "Con le attività in -ing (shopping, cycling, swimming) NON si usa 'to'. Con i luoghi (the gym, Pisa) si usa 'to'."
            },
            {
              clue: "Say 2 true sentences about your week: 1) one 'go + -ing' activity (e.g., cycling, shopping) and 2) one 'go to + place'.",
              answer: "e.g., 'I go cycling on the Lucca wall at lunch, and I go to the supermarket twice a week.'",
              italian: "Esempio: 'I go cycling...' (senza 'to') + 'I go to the supermarket / to Pisa...'"
            },
            {
              clue: "Fix this slip: ❌ 'I love go to. No, I love go. The shopping... I love go to Zoho.'",
              answer: "I love going shopping... and I love going to the zoo!",
              italian: "Dopo 'love' usa la forma in -ing: 'I love going shopping' e 'I love going to the zoo'."
            },
            {
              clue: "Travel & Safari Rule: Fix ❌ 'Last summer I went in Kenya to and I went in the safari.'",
              answer: "Last summer I went to Kenya, and I went on safari!",
              italian: "Per i paesi si usa 'go TO Kenya'; per il safari si dice 'go ON safari'."
            },
            {
              clue: "Triple Speed Challenge! Say 3 clean sentences using: 1) go cycling  2) go to Florence  3) go out for dinner.",
              answer: "e.g., 'I go cycling at lunch. I go to Florence to help my family. At night, I go out for dinner with friends.'",
              italian: "Usa tutte e tre le espressioni in frasi complete: 'go cycling', 'go to Florence', 'go out for dinner'."
            }
          ]
        },
        {
          title: "2. Past, Present & Future",
          clues: [
            {
              clue: "Irregular Past Match! Say the past simple of these 4 verbs: GO → ___  |  EAT → ___  |  BUY → ___  |  LEAVE → ___",
              answer: "went • ate • bought • left",
              italian: "Verbi irregolari al passato: go → went, eat → ate, buy → bought, leave → left."
            },
            {
              clue: "Tell me 2 things you DID yesterday or this weekend using 'went', 'ate', or 'bought'.",
              answer: "e.g., 'On Saturday I went to Pisa and I bought tiles. At night I ate pizza with my friends.'",
              italian: "Racconta 2 cose fatte questo weekend usando il passato: 'went', 'ate' o 'bought'."
            },
            {
              clue: "Frequency Check! Answer in full sentences: How often do you ride your bike? How often do you visit Florence?",
              answer: "e.g., 'I do a lap of the Lucca wall three times a week. I go to Florence once a month.'",
              italian: "Usa espressioni di frequenza: 'twice a week' (2 volte a settimana), 'once a month' (1 volta al mese)."
            },
            {
              clue: "Future Plans: Say 2 sentences about your plans for this week or next weekend using 'will' or 'going to'.",
              answer: "e.g., 'This week I will meet two enterprise clients. Next weekend I'm going to buy fixtures for my house.'",
              italian: "Parla del futuro con 'will' o 'going to': lavoro questa settimana + casa o tempo libero nel weekend."
            },
            {
              clue: "3-Tense Switch (30s): Speak about your house renovation in 3 sentences: 1) Past  2) Present  3) Future!",
              answer: "e.g., 'Last month I bought tiles in Pisa. Now I am choosing light switches. Next month I will move into the house!'",
              italian: "Cambia tempo in 3 frasi sulla ristrutturazione: Passato (bought/went) → Presente → Futuro (will)."
            }
          ]
        },
        {
          title: "3. Fix the Real Slip",
          clues: [
            {
              clue: "Fix this real line from Oct 29: ❌ 'In the night, I went to I go out with my friends to dinner.'",
              answer: "At night, I went out with my friends for dinner.",
              italian: "Si dice 'AT night' (non 'in the night'), passato 'went out', e 'FOR dinner' (non 'to dinner')."
            },
            {
              clue: "Duration Fix: ❌ 'I stay, two a week.' → Say the clean past sentence!",
              answer: "I stayed for two weeks.",
              italian: "Passato regolare 'stayed' + 'FOR' prima della durata ('for two weeks', plurale!)."
            },
            {
              clue: "Renovation Vocabulary! Fix ❌ 'I bought some instrument... something to put on the wall to the light.'",
              answer: "I bought some fixtures for the house—a light switch for the wall.",
              italian: "'Strumento' in inglese non si usa per la casa: usa 'fixtures' (impianti/accessori) e 'light switch' (interruttore)."
            },
            {
              clue: "Preposition Polish! Fill the blanks: '___ Saturday morning I worked, and ___ lunchtime I rode my bike ___ the wall.'",
              answer: "ON Saturday morning I worked, and AT lunchtime I rode my bike ON the wall.",
              italian: "Giorni = ON (on Saturday); pasti/orari = AT (at lunchtime); sopra le mura = ON the wall."
            },
            {
              clue: "Say It Smoothly Twice! Fix and repeat: ❌ 'Yesterday I eat pizza and I go to shopping in Pisa.'",
              answer: "Yesterday I ate pizza and I went shopping in Pisa.",
              italian: "Attenzione al passato di entrambi i verbi ('ate' e 'went') e niente 'to' prima di 'shopping'!"
            }
          ]
        },
        {
          title: "4. Chill & Anti-Block ✨",
          clues: [
            {
              clue: "Name the 3 Anti-Block Connectors from today's lesson that buy you 3 seconds of thinking time!",
              answer: "1) 'What I mean is...'  2) 'Let me put it this way...'  3) 'For example...'",
              italian: "I 3 connettori di oggi per non bloccarsi: 'What I mean is...', 'Let me put it this way...', 'For example...'."
            },
            {
              clue: "Explain 'aperitivo' (or 'girl dinner') to a foreign friend in 2 sentences using 'What I mean is...'!",
              answer: "e.g., 'After work we go for an aperitivo—what I mean is, pre-dinner drinks and finger food with friends to relax.'",
              italian: "Spiega cos'è l'aperitivo usando 'What I mean is...' per chiarire senza fermarti!"
            },
            {
              clue: "Unwind Time! What is your comfort TV show, movie, or cozy game after work? Tell us why using 'For example...'!",
              answer: "e.g., 'I love watching easy comedy shows to switch off. For example, I put on Friends while I make dinner.'",
              italian: "Racconta cosa guardi o fai per rilassarti dopo il lavoro e usa 'For example...' per fare un esempio!"
            },
            {
              clue: "You forgot the word 'light switch' (or 'earbuds')! Keep talking for 20s using 'What I mean is...' to describe it.",
              answer: "e.g., 'I bought something for the wall—what I mean is, the small button you press to turn on the light!'",
              italian: "Fingi di non ricordare la parola 'light switch' o 'earbuds': descrivilo con 'What I mean is...' senza bloccarti!"
            },
            {
              clue: "45-Second Chill Story! Describe your dream relaxing Sunday in Tuscany (or your favorite trip) using TWO connectors.",
              answer: "Open-ended fluency check: 45 seconds without freezing, using 2+ connectors!",
              italian: "Racconta per 45 secondi la tua domenica ideale in Toscana o un viaggio usando almeno 2 connettori anti-blocco."
            }
          ]
        },
        {
          title: "5. 3-Step Pitch (Fun & Work)",
          clues: [
            {
              clue: "What are the 3 Steps of the Pitch Formula? (1. M___ P___ → 2. T___ S___ → 3. L___-F___ ROI)",
              answer: "1. Macro Problem (what the listener cares about) → 2. Targeted Solution → 3. Low-Friction ROI (easy & low-cost).",
              italian: "1) Macro Problem (il problema di chi ascolta), 2) Targeted Solution (la tua idea), 3) Low-Friction ROI (facile, veloce, poco costoso)."
            },
            {
              clue: "Fix the Pitch! ❌ 'I'm so tired, so I want to work from home.' → Rewrite Step 1 so the BOSS cares!",
              answer: "e.g., 'Next month we have heavy deliverables and deep-focus tasks, so distractions in the office could slow down output.'",
              italian: "Non partire dal tuo bisogno personale! Parti da ciò che interessa al manager: produttività, concentrazione, risultati."
            },
            {
              clue: "Girls' Weekend Pitch! Convince your best friend to book a last-minute weekend trip (Rome, Paris, or the beach) in 3 steps!",
              answer: "1) Problem: We've both been working nonstop and need a reset. 2) Solution: Let's book a 2-night train trip! 3) ROI: Cheap tickets, zero planning stress.",
              italian: "Fai un mini-pitch di 30s per convincere la tua migliore amica a partire per un weekend fuori!"
            },
            {
              clue: "Office Policy Pitch (30s): Pitch 'Wednesday Team Pizza Lunch' or 'Bring Your Puppy to Work Day' in 3 steps!",
              answer: "1) Problem: Heavy Q4 workload & burnout risk. 2) Solution: Informal Wednesday pizza lunch / puppy Friday. 3) ROI: Very low cost, big morale boost.",
              italian: "Fai il pitch del 'Wednesday Pizza Lunch' o 'Puppy Day' in 3 step: Problema del team → Soluzione → Basso costo / alto morale."
            },
            {
              clue: "Live Client Pitch (45s): A Commercial Director says 'My sales reps are demotivated.' Deliver the 3-Step Pitch + 1 Connector!",
              answer: "1) Macro Problem (missed targets) → 2) Targeted Solution (clear incentive tracking) → 3) Low-Friction ROI (fast rollout) + connector.",
              italian: "Pitch completo di 45s per un Direttore Commerciale: Macro Problem → Soluzione software → ROI facile + 1 connettore!"
            }
          ]
        }
      ],
      final: {
        category: "GIULIA'S EXECUTIVE PITCH CHALLENGE 🇮🇹",
        clue: "60-Second Grand Finale! Pitch ONE real work initiative (or smart-working policy) using: 1) Macro Problem → 2) Targeted Solution → 3) Low-Friction ROI + at least ONE Anti-Block Connector ('What I mean is...', 'Let me put it this way...', or 'For example...')!",
        answer: "Fluency Win: Smooth 60s delivery focused on the listener's ROI, with zero freezes and at least one natural connector!",
        italian: "Sfida finale da 60 secondi: fai un pitch completo in 3 step (Macro Problem → Solution → Low-Friction ROI) usando almeno 1 connettore anti-blocco!"
      }
    },

    giulia_chill: {
      name: "Giulia's Chill & Pop Culture Night 🍷✨ (25yo Fun!)",
      categories: [
        {
          title: "1. Netflix & Pop Culture 🎬",
          clues: [
            {
              clue: "Fill in the blank for this famous Netflix series about a young marketing exec in France: 'Emily in ___'.",
              answer: "Emily in Paris!",
              italian: "Serie Netflix famosissima ambientata a Parigi!"
            },
            {
              clue: "Music Check! Name 2 pop artists or songs you love listening to in the car or at the gym, and say why!",
              answer: "Open-ended! e.g., 'I love listening to Taylor Swift / Dua Lipa / Italian pop because it gives me energy.'",
              italian: "Nomina 2 cantanti o canzoni che ascolti in macchina o in palestra e spiega perché ti piacciono."
            },
            {
              clue: "In the classic sitcom 'Friends', what is the name of the coffee shop where everyone hangs out? (Central ___)",
              answer: "Central Perk! (Bonus sentence: 'They go to the coffee shop every day.')",
              italian: "Il famoso bar di Friends: Central Perk!"
            },
            {
              clue: "Which famous Italian music festival in February has everyone watching late at night, judging outfits, and voting?",
              answer: "Sanremo! (Describe what you like about Sanremo in 2 English sentences.)",
              italian: "Il Festival di Sanremo! Descrivilo in 2 frasi in inglese."
            },
            {
              clue: "Comfort Rewatch! What TV show or movie do you watch when you are tired and just want to switch off your brain?",
              answer: "Open-ended speaking prompt (2–3 sentences: what it's about + why it's relaxing).",
              italian: "Qual è la tua serie o film 'coperta calda' per staccare la spina dopo il lavoro?"
            }
          ]
        },
        {
          title: "2. Food, Aperitivo & Cozy 🍕",
          clues: [
            {
              clue: "Aperitivo Classic! Besides ice and a slice of orange, what are the 3 ingredients in an Aperol Spritz?",
              answer: "Aperol, Prosecco, and soda water (sparkling water)!",
              italian: "Aperol, Prosecco e soda (acqua frizzante)!"
            },
            {
              clue: "The Ultimate Debate: Pineapple on pizza — acceptable or a crime? Defend your opinion in 2 English sentences!",
              answer: "Open-ended! e.g., 'For me it is a crime because pizza should be savory, not sweet!'",
              italian: "Ananas sulla pizza: sì o no? Difendi la tua opinione in 2 frasi!"
            },
            {
              clue: "Lazy Dinner! After a long workday, what is your favorite quick meal to cook or order at home?",
              answer: "Open-ended! e.g., 'When I'm tired, I make pasta with pesto or order sushi / pizza.'",
              italian: "Cosa prepari o ordini al volo quando torni stanca dal lavoro?"
            },
            {
              clue: "Italian Coffee Rule! Explain to a tourist in English: when is it 'illegal' in Italy to order a cappuccino?",
              answer: "After 11:00 AM / after lunch or dinner! (In Italy, cappuccino is for breakfast only.)",
              italian: "Spiega a un turista che il cappuccino si beve solo a colazione, mai dopo pranzo o cena!"
            },
            {
              clue: "Roleplay: You are ordering aperitivo & dinner in English with friends. Order 1 drink, 1 snack to share, and 1 main dish!",
              answer: "e.g., 'Could we have two Aperol Spritzes, some olives and focaccia to share, and a margherita pizza, please?'",
              italian: "Ordina in inglese un drink, uno stuzzichino da condividere e un piatto principale!"
            }
          ]
        },
        {
          title: "3. Travel & Dream Trips ✈️",
          clues: [
            {
              clue: "Which European city is famous for the Eiffel Tower, croissants, and fashion? Say: 'I want to go to ___.'",
              answer: "Paris! ('I want to go to Paris.' — Remember: NO 'the' before cities!)",
              italian: "Parigi! Ricorda: niente 'the' prima delle città."
            },
            {
              clue: "Quick Grammar Check! Fix ❌ 'Last summer I went in Kenya and I went in the safari.'",
              answer: "Last summer I went to Kenya and I went on safari!",
              italian: "Ripasso veloce: 'went TO Kenya' e 'went ON safari'."
            },
            {
              clue: "Beach holiday vs. City break! Which one relaxes you more after a busy month at work, and why?",
              answer: "Open-ended! e.g., 'A beach holiday relaxes me more because I can read, swim, and do nothing.'",
              italian: "Vacanza al mare o weekend in città? Quale ti rilassa di più dopo un mese intenso?"
            },
            {
              clue: "Carry-On Essentials! Name 4 things you ALWAYS pack in your bag for a weekend trip!",
              answer: "e.g., 'Skincare, my phone charger, sunglasses, and comfortable sneakers.'",
              italian: "Nomina 4 cose che metti sempre in valigia per un weekend!"
            },
            {
              clue: "Dream 4-Day Reset! If you had 4 free days next month with unlimited budget, where would you go and what would you do?",
              answer: "Open-ended speaking (use 'I would go to...' or 'I will...').",
              italian: "Se avessi 4 giorni liberi e budget illimitato il mese prossimo, dove andresti?"
            }
          ]
        },
        {
          title: "4. Life at 25 & Weekends 🥂",
          clues: [
            {
              clue: "Fix ❌ 'In the night, I go out with my friends to dinner.' → Say it cleanly in the past!",
              answer: "At night, I went out with my friends for dinner.",
              italian: "'AT night', passato 'went out', e 'FOR dinner'!"
            },
            {
              clue: "Green Flag vs. Red Flag! Name 1 'green flag' and 1 'red flag' in a friend, partner, or coworker!",
              answer: "Open-ended! e.g., 'A green flag is being a good listener. A red flag is always being late without texting.'",
              italian: "Dimmi una 'green flag' (cosa positiva) e una 'red flag' (campanello d'allarme) in un'amicizia o al lavoro!"
            },
            {
              clue: "Cozy Night In vs. Night Out! Which do you prefer on a Friday after a heavy workweek? Tell us in 2 sentences!",
              answer: "Open-ended! e.g., 'On Friday I prefer a cozy night in with dinner and a movie because I'm tired from work.'",
              italian: "Venerdì sera: serata tranquilla sul divano o fuori con gli amici? Spiega in 2 frasi."
            },
            {
              clue: "Lucca Comic Con! Describe what Lucca looks like during Comic Con to someone who has never seen it!",
              answer: "e.g., 'Thousands of people walk around the historic walls in amazing cosplay costumes—it's super colorful and fun!'",
              italian: "Racconta com'è Lucca durante il Lucca Comics a qualcuno che non c'è mai stato!"
            },
            {
              clue: "My Ideal Stress-Free Saturday! Describe your perfect Saturday from morning to night in 4 sentences (use 'go + -ing'!).",
              answer: "e.g., 'I wake up late, go shopping in town, have lunch with friends, and at night I go out for dinner and aperitivo.'",
              italian: "Descrivi il tuo sabato perfetto senza stress dalla mattina alla sera in 4 frasi!"
            }
          ]
        },
        {
          title: "5. Work-Life Balance 🌿",
          clues: [
            {
              clue: "What does 'switch off' or 'log off' mean at 6:00 PM? Use it in a sentence about your evening!",
              answer: "To stop working and stop checking emails/messages. e.g., 'At 6:30 I log off and go cycling.'",
              italian: "'Switch off / log off' significa staccare dal lavoro e spegnere il computer/cervello."
            },
            {
              clue: "Decompress Mode! What is the #1 thing that helps you release stress after a tough sales call? (bike, walk, music, dog...)",
              answer: "Open-ended! e.g., 'Doing a lap of the Lucca wall on my bike clears my head immediately.'",
              italian: "Qual è la cosa numero 1 che ti fa scaricare lo stress dopo una call difficile?"
            },
            {
              clue: "Polite Boundary! A colleague texts you at 8:30 PM about something non-urgent. Say a polite 2-sentence reply!",
              answer: "e.g., 'Thanks for sending this over! I've logged off for the evening, so I'll take a look first thing tomorrow morning.'",
              italian: "Rispondi con gentilezza a un collega che ti scrive alle 20:30 per qualcosa di non urgente!"
            },
            {
              clue: "Self-Care Pitch! Convince your manager to try 'No-Meeting Friday Afternoons' in 2–3 sentences!",
              answer: "e.g., 'With fewer Friday calls, the team can finish weekly admin faster and start Monday with much higher energy.'",
              italian: "Proponi 'Venerdì pomeriggio senza call' puntando su efficienza ed energia del team!"
            },
            {
              clue: "45-Second Pep Talk! What advice would you give to a 25-year-old woman starting her very first sales job?",
              answer: "Open-ended! e.g., 'Don't be afraid to ask questions, celebrate small wins, and always protect your free time.'",
              italian: "Che consiglio daresti a una ragazza di 25 anni che inizia oggi il suo primo lavoro nelle vendite?"
            }
          ]
        }
      ],
      final: {
        category: "DREAM WEEKEND RESET 🍷✈️",
        clue: "Design your ultimate 48-hour stress-free weekend! Tell us: 1) Where you go (or stay)  2) What you eat & drink  3) One 'go + -ing' activity  4) One thing you definitely DON'T do (work emails!)!",
        answer: "Fluency Win: A relaxed, natural 45–60s story with zero work stress!",
        italian: "Progetta il tuo weekend ideale anti-stress di 48 ore: dove vai, cosa mangi/bevi, un'attività con 'go + -ing' e una cosa che NON fai!"
      }
    },

    abdi: {
      name: "Abdi's Big A1 Revision (Lessons 1–6) 🇪🇹",
      categories: [
        {
          title: "1. About Me & Jobs",
          clues: [
            {
              clue: "Answer in 2 full sentences: What is your name? Where are you from? 🇪🇹",
              answer: "My name is Abdi. I am from Ethiopia.",
              oromo: "Maqaan kee eenyu? Eessaa dhufte? → Maqaan koo Abdiidha. Ani Itoophiyaa irraan dhufe."
            },
            {
              clue: "Put 'a' or 'an': 1) He is ___ doctor.  2) She is ___ engineer.",
              answer: "1) He is A doctor.  2) She is AN engineer. (Use 'an' before a, e, i, o, u!)",
              oromo: "'a' ykn 'an' galchi: Inni doktora (a doctor). Isheen injinara (an engineer)."
            },
            {
              clue: "Where does a doctor work? Where does a chef work? (Use: in a...)",
              answer: "A doctor works in a hospital. A chef works in a restaurant.",
              oromo: "Doktorri hospitaala keessa hojjeta (in a hospital). Sheefiin mana nyaataa keessa hojjeta (in a restaurant)."
            },
            {
              clue: "Prepositions (in / on / under / next to): 1) The laptop is ___ the table.  2) The shoes are ___ the chair.",
              answer: "1) The laptop is ON the table.  2) The shoes are UNDER the chair.",
              oromo: "Laaptooppiin minjaala irra jira (ON). Kopheen barcuma jala jira (UNDER)."
            },
            {
              clue: "Introduce yourself in 4 clean sentences: Name + Age (26) + Country + Student!",
              answer: "My name is Abdi. I am 26 years old. I am from Ethiopia. I am a student.",
              oromo: "Hima 4 dubbadhu: Maqaa + Umurii (26) + Biyya (Ethiopia) + Barataa (I am a student)."
            }
          ]
        },
        {
          title: "2. What Time Is It? ⏰",
          clues: [
            {
              clue: "How do we say 07:00 in English? 'It is _________.'",
              answer: "It is seven o'clock.",
              oromo: "Sa'aatii 07:00 Afaan Ingiliffaan akkamitti jenna? → It is seven o'clock."
            },
            {
              clue: "🍕 50% (Half a pizza!): How do we say 07:30 and 08:30 in English?",
              answer: "It is half past seven. / It is half past eight.",
              oromo: "Walakkaa (50% = half past): 07:30 = half past seven • 08:30 = half past eight."
            },
            {
              clue: "🍕 25% (A quarter!): How do we say 07:15 and 09:15 in English?",
              answer: "It is a quarter past seven. / It is a quarter past nine.",
              oromo: "Kurmaana (25% = a quarter past): 07:15 = a quarter past seven • 09:15 = a quarter past nine."
            },
            {
              clue: "24-Hour Clock Rule (21 - 12 = 9): How do we say 21:00 and 23:15 in everyday English?",
              answer: "21:00 = It is nine o'clock. / 23:15 = It is a quarter past eleven.",
              oromo: "Ingiliffaan '21:00' hin jennu (21 - 12 = 9): It is nine o'clock / It is a quarter past eleven."
            },
            {
              clue: "How do we say 07:45 (15 minutes before 8)? And what time do you eat breakfast?",
              answer: "07:45 = It is a quarter to eight. / I eat breakfast at half past eight.",
              oromo: "07:45 = It is a quarter to eight. Quraata sa'aatii meeqatti nyaatta? (I eat at half past eight)."
            }
          ]
        },
        {
          title: "3. AT, IN, or ON? 📅",
          clues: [
            {
              clue: "Clock Time Rule: Do we say 'I wake up AT 7 o'clock' or 'IN 7 o'clock'? Say the full sentence!",
              answer: "AT! I wake up at seven o'clock.",
              oromo: "Sa'aatii lakkoofsaa wajjin AT fayyadamna: I wake up at seven o'clock."
            },
            {
              clue: "Parts of the Day (the morning / the afternoon / the evening): Put AT, IN, or ON: 'I drink coffee ___ the morning.'",
              answer: "IN! I drink coffee in the morning.",
              oromo: "The morning / the afternoon / the evening dura IN galchina: I drink coffee in the morning."
            },
            {
              clue: "Days of the Week (Fix the mistake from Nov 17!): ❌ 'I go to the market at Friday.' → What is the clean sentence?",
              answer: "ON! I go to the market on Friday.",
              oromo: "Guyyoota torbanii (Monday–Sunday) dura ON galchina: I go to the market on Friday. (Jimaata gabaa nan deema)."
            },
            {
              clue: "Night & Home Rule: Put ONE word (at / in / on) in both blanks: 'I eat ___ home, and I sleep ___ night.'",
              answer: "AT! I eat at home, and I sleep at night.",
              oromo: "Mana keessatti (at home) fi halkan (at night) lamaanuu AT fudhatu!"
            },
            {
              clue: "Triple Challenge! Put AT, IN, and ON: 'I wake up ___ 7:00 ___ the morning ___ Monday.'",
              answer: "I wake up AT 7:00 IN the morning ON Monday.",
              oromo: "AT 7:00 (sa'aatii) • IN the morning (ganama) • ON Monday (guyyaa Wiixataa)."
            }
          ]
        },
        {
          title: "4. I / I Don't & He / She",
          clues: [
            {
              clue: "Morning Routine: Say 3 things you do every morning! (wake up / wash my face / brush my teeth / drink coffee)",
              answer: "I wake up at 7:00. I wash my face. I brush my teeth. I drink coffee.",
              oromo: "Wanta ganama hunda hojjettu 3 himi: nan ka'a (wake up), fuula koo nan dhiqadha (wash my face), ilkaan koo nan rigadha (brush my teeth)."
            },
            {
              clue: "Say NO with 'I don't': Do you watch TV? Answer in 2 sentences (TV 📺 vs. Phone 📱)!",
              answer: "No, I don't. I don't watch TV. I watch my phone.",
              oromo: "Lakki, TV hin ilaalu. Bilbila koo nan ilaala. → No, I don't. I don't watch TV. I watch my phone."
            },
            {
              clue: "Fix this slip from Nov 17: Teacher asks 'Do you drink coffee?' → ❌ 'Yes, I don't.' What is the clean YES answer?",
              answer: "Yes, I do! (I drink coffee.) — And for NO: 'No, I don't.'",
              oromo: "Eeyyee = Yes, I do. (Eeyyee, nan dhuga) • Lakki = No, I don't. ('Yes, I don't' hin jedhamu!)"
            },
            {
              clue: "Change 'I' to 'He / She' (Add -s / -es / -ies!): 1) I play football → He _____  2) I watch TV → He _____  3) I study English → She _____",
              answer: "1) He PLAYS football.  2) He WATCHES TV.  3) She STUDIES English.",
              oromo: "Inni/Isheen (-s / -es / -ies): He plays • He watches • She studies."
            },
            {
              clue: "Fix the '-s' mistake with DOESN'T (From Nov 17!): ❌ 'He doesn't plays football.' and ❌ 'He doesn't eats out.'",
              answer: "He doesn't play football. He doesn't eat out. (NO '-s' after doesn't!)",
              oromo: "Doesn't booda '-s' hin galu! Inni kubbaa miilaa hin taphatu = He doesn't play football."
            }
          ]
        },
        {
          title: "5. Places & Questions 🌍",
          clues: [
            {
              clue: "Fix this sentence from Nov 17: ❌ 'Coffee shop. I'm well in the coffee shop.'",
              answer: "I go to the coffee shop.",
              oromo: "Mana bunaa nan deema = I go to the coffee shop."
            },
            {
              clue: "Places in Town (go to the...): Say 2 places you go to and 1 place you don't go to! (coffee shop, park, market, gym, cinema)",
              answer: "I go to the coffee shop. I go to the market. I don't go to the cinema.",
              oromo: "Iddoo magaalaa 2 kan deemtu (I go to the...) fi 1 kan hin deemne (I don't go to the...) himi!"
            },
            {
              clue: "Town vs. Country Rule: Do we say 'I go to THE Japan' or 'I go to Japan'? Why?",
              answer: "I go to Japan! (NO 'the' before countries or cities: I go to Japan, I go to London, I live in Ethiopia.)",
              oromo: "Biyya fi magaalaa dura 'the' hin galu: I go to Japan • I go to London • I live in Ethiopia."
            },
            {
              clue: "Fix the Habit Mistake (No 'I'm -ing' for every day!): 1) ❌ 'I'm eating at 8:30.'  2) ❌ 'I'm going to market on Friday.'",
              answer: "1) I eat at half past eight.  2) I go to the market on Friday.",
              oromo: "Wanta guyyaa hunda hojjettuuf 'I eat / I go' fayyadami (I'm eating / I'm going miti!)."
            },
            {
              clue: "One Friend Question ('Does she...?'): Answer BOTH ways (🟢 YES and 🔴 NO): 'Does she cook dinner at home?'",
              answer: "🟢 Yes, she does. She cooks dinner. / 🔴 No, she doesn't. She doesn't cook dinner.",
              oromo: "Isheen mana keessatti irbaata ni bilcheessitii? → 🟢 Yes, she does. / 🔴 No, she doesn't."
            }
          ]
        }
      ],
      final: {
        category: "ABDI'S COMPLETE DAY & WEEK 🇪🇹",
        clue: "Say 5 clean sentences about your real life! 1) Name & Country 🇪🇹  2) What time you wake up ⏰  3) One thing you DO every day 🟢  4) One thing you DON'T do 🔴  5) Where you go on Friday or in town 🏙️",
        answer: "1) My name is Abdi and I am from Ethiopia. 2) I wake up at seven o'clock. 3) I drink coffee and watch my phone. 4) I don't watch TV. 5) I go to the market on Friday.",
        oromo: "Hima 5 waa'ee jireenya keetii dubbadhu: 1) Maqaa & Biyya 2) Sa'aatii itti kaatu 3) Wanta guyyaa hunda hojjettu 4) Wanta hin hojjenne (I don't...) 5) Jimaata eessa akka deemtu (I go to the...)."
      }
    },

    conversation: {
      name: "Conversation & Life (B1–B2)",
      categories: [
        {
          title: "Travel & Places",
          clues: [
            { clue: "Name 3 things you always pack in your carry-on bag and explain why.", answer: "Open-ended speaking prompt (check vocabulary & reasons)" },
            { clue: "Describe your favorite trip you have ever taken in 3 sentences using the past simple.", answer: "Open-ended (check past simple verbs)" },
            { clue: "Roleplay: You missed your train. Ask the station clerk for the next available route.", answer: "Polite request: 'Excuse me, could you tell me when the next train leaves?'" },
            { clue: "Compare traveling alone vs. traveling with friends using at least 2 comparatives.", answer: "e.g., 'Traveling alone is more flexible, whereas traveling with friends is livelier.'" },
            { clue: "If you could live in any city for one year, where would you go and why? (Use 2nd conditional)", answer: "e.g., 'If I lived in Tokyo, I would explore...'" }
          ]
        },
        {
          title: "Idioms & Expressions",
          clues: [
            { clue: "What does 'a piece of cake' mean? Use it in a sentence.", answer: "Something very easy to do." },
            { clue: "If someone says 'I'm feeling under the weather,' how do they feel?", answer: "Slightly sick or unwell." },
            { clue: "Explain the idiom 'break the ice' and give an example situation.", answer: "To make people feel comfortable in a new social situation." },
            { clue: "What does 'hit the nail on the head' mean?", answer: "To describe exactly what is causing a situation or problem; to be completely right." },
            { clue: "Use 'on the same page' in a workplace or study sentence.", answer: "Agreeing about what needs to be done / having the same understanding." }
          ]
        },
        {
          title: "Fix the Mistake",
          clues: [
            { clue: "Correct this sentence: 'She don't like waking up early.'", answer: "'She doesn't like waking up early.'" },
            { clue: "Correct this sentence: 'I am living here since three years.'", answer: "'I have been living / have lived here for three years.'" },
            { clue: "Correct this sentence: 'He suggested me to take a taxi.'", answer: "'He suggested that I take a taxi' or 'He suggested taking a taxi.'" },
            { clue: "Correct this sentence: 'Despite of the rain, we went hiking.'", answer: "'Despite the rain...' or 'In spite of the rain...'" },
            { clue: "Correct this sentence: 'If I would have known, I would have called you.'", answer: "'If I had known, I would have called you.'" }
          ]
        },
        {
          title: "Quick Debate",
          clues: [
            { clue: "Cats or dogs? Give 2 reasons for your choice.", answer: "Open-ended opinion + reasons" },
            { clue: "Is working from home better than working in an office? Give 1 pro and 1 con.", answer: "Open-ended balanced argument" },
            { clue: "Should schools ban smartphones during class? Defend your opinion for 30 seconds.", answer: "Open-ended persuasive speaking" },
            { clue: "Money vs. Free time: Which matters more in your 30s?", answer: "Open-ended opinion with justification" },
            { clue: "Will AI replace language teachers, or just change how we learn? Explain.", answer: "Open-ended future prediction & reasoning" }
          ]
        },
        {
          title: "Storytelling",
          clues: [
            { clue: "Invent a 2-sentence story using these words: 'umbrella' and 'airport'.", answer: "Creative speaking check" },
            { clue: "What is the funniest or strangest food you've ever tried?", answer: "Open-ended past experience" },
            { clue: "Describe a movie you love without saying its title—can your teacher guess it?", answer: "Descriptive speaking / circumlocution" },
            { clue: "Continue this story: 'I opened my front door and saw a giant blue envelope...'", answer: "Creative past-tense narrative" },
            { clue: "Tell a 30-second story about a small problem that turned into a great memory.", answer: "Narrative fluency check" }
          ]
        }
      ],
      final: {
        category: "WORLD FLAGS & GEOGRAPHY",
        clue: "Name the only sovereign country in the world whose national flag is not a rectangle or square.",
        answer: "Nepal"
      }
    },

    grammar: {
      name: "Grammar & Vocab Lab (A2–B1)",
      categories: [
        {
          title: "Prepositions",
          clues: [
            { clue: "Fill in: 'The meeting starts ___ 9:30 AM ___ Monday.'", answer: "at / on" },
            { clue: "Fill in: 'I'm really interested ___ learning photography.'", answer: "in" },
            { clue: "Fill in: 'She arrived ___ the airport two hours early.'", answer: "at" },
            { clue: "Fill in: 'He apologized ___ being late to the lesson.'", answer: "for" },
            { clue: "Fill in: 'We've been waiting ___ the bus ___ twenty minutes.'", answer: "for / for" }
          ]
        },
        {
          title: "Phrasal Verbs",
          clues: [
            { clue: "What does 'wake up' vs. 'get up' mean?", answer: "Wake up = stop sleeping; Get up = leave your bed." },
            { clue: "Replace the bold word: 'Please **cancel** the meeting.' (call ___)", answer: "call off" },
            { clue: "Fill in: 'I ran ___ an old friend at the supermarket yesterday.'", answer: "into (ran into)" },
            { clue: "What does 'put off' mean? Use it in a sentence.", answer: "To postpone / delay doing something." },
            { clue: "Explain 'look forward to' and make a sentence with a verb after it.", answer: "Be excited about something in the future (+ -ing: 'I look forward to seeing you.')" }
          ]
        },
        {
          title: "Past vs. Present",
          clues: [
            { clue: "Make a negative sentence in the past simple with the verb 'buy'.", answer: "e.g., 'I didn't buy anything yesterday.'" },
            { clue: "Choose one: 'I (saw / have seen) that movie three times already.'", answer: "have seen" },
            { clue: "Ask your teacher a question starting with 'Have you ever...?'", answer: "e.g., 'Have you ever been to Japan?'" },
            { clue: "Combine using 'while': 'I / cook dinner' + 'the phone / ring'.", answer: "'While I was cooking dinner, the phone rang.'" },
            { clue: "Explain the difference between 'I used to play tennis' and 'I'm used to playing tennis.'", answer: "Past habit vs. being accustomed/comfortable with something now." }
          ]
        },
        {
          title: "Synonyms",
          clues: [
            { clue: "Give a stronger synonym for 'very big'.", answer: "huge / enormous / massive / gigantic" },
            { clue: "Give a stronger synonym for 'very tired'.", answer: "exhausted / worn out" },
            { clue: "Give a polite synonym for 'cheap' (when describing good value).", answer: "affordable / reasonable / inexpensive" },
            { clue: "Give 2 synonyms for 'happy'.", answer: "glad / thrilled / delighted / cheerful" },
            { clue: "What is a more formal word for 'ask for'?", answer: "request" }
          ]
        },
        {
          title: "Make a Question",
          clues: [
            { clue: "Ask your teacher about their weekend plans.", answer: "e.g., 'What are you going to do this weekend?'" },
            { clue: "Turn this into a question: 'You live near the city center.'", answer: "'Do you live near the city center?'" },
            { clue: "Make a polite indirect question: 'Where is the nearest subway station?'", answer: "'Could you tell me where the nearest subway station is?'" },
            { clue: "Ask a question using 'How long...?'", answer: "e.g., 'How long have you been teaching?'" },
            { clue: "Make a question with 'would you rather'.", answer: "e.g., 'Would you rather live by the sea or in the mountains?'" }
          ]
        }
      ],
      final: {
        category: "ENGLISH LANGUAGE ORIGINS",
        clue: "Which 1066 historical event flooded English with over 10,000 French words—creating pairs like 'cow/beef' and 'pig/pork'?",
        answer: "The Norman Conquest (Battle of Hastings)"
      }
    },

    trivia: {
      name: "Nerd & Board Game Trivia",
      categories: [
        {
          title: "Board Games & Tabletop",
          clues: [
            { clue: "In Settlers of Catan, what are the 5 resources players collect and trade?", answer: "Brick, Lumber (Wood), Ore, Grain (Wheat), and Wool (Sheep)" },
            { clue: "In Dungeons & Dragons, what 20-sided die is iconic—and what happens on a 'Nat 1' vs. a 'Nat 20'?", answer: "A d20; Nat 1 = Critical Fail, Nat 20 = Critical Success" },
            { clue: "In Chess, which piece is the only one that can jump over others, and what is the special move with a King and Rook called?", answer: "The Knight; Castling" },
            { clue: "In which hit cooperative board game do players race to cure 4 global diseases before outbreaks overwhelm the world?", answer: "Pandemic" },
            { clue: "Explain the difference between a 'Eurogame' (like Carcassonne or Ticket to Ride) and an 'Ameritrash' game—and which style do you prefer?", answer: "Eurogames focus on strategy, resource management, and low luck; Ameritrash focuses on theme, drama, combat, and dice/luck." }
          ]
        },
        {
          title: "Sci-Fi & Fantasy Lore",
          clues: [
            { clue: "In The Lord of the Rings, what Elvish word must you speak to open the Doors of Durin (Mines of Moria)?", answer: "'Mellon' (meaning 'friend')" },
            { clue: "In Star Wars, Han Solo brags about the Kessel Run in 12 'parsecs'. Why is that scientifically funny?", answer: "A parsec is a unit of distance (~3.26 light-years), not time!" },
            { clue: "In Dune, what are the giant sandworms of Arrakis called by the Fremen, and why is 'Spice' (melange) so valuable?", answer: "Shai-Hulud; it extends life and enables interstellar space navigation" },
            { clue: "Isaac Asimov wrote the Three Laws of Robotics. Can you name at least two of them?", answer: "1) Don't harm humans (or allow harm); 2) Obey humans unless it breaks Law 1; 3) Protect own existence unless it breaks Laws 1 or 2" },
            { clue: "In The Hitchhiker's Guide to the Galaxy, Deep Thought says the Answer to Life, the Universe, and Everything is 42. Why wasn't that helpful?", answer: "Because nobody knew what the actual Ultimate Question was!" }
          ]
        },
        {
          title: "Weird Science & Mindbenders",
          clues: [
            { clue: "Which planet in our solar system rotates on its side (~98° tilt), and which one spins backwards?", answer: "Uranus tilts on its side; Venus spins backwards (retrograde)" },
            { clue: "What famous quantum physics thought experiment involves a cat in a box that is both alive and dead until observed?", answer: "Schrödinger's Cat" },
            { clue: "If you could fold a standard piece of paper in half 42 times, roughly how thick would it be?", answer: "Thick enough to reach the Moon! (Exponential growth: ~440,000 km)" },
            { clue: "What is the 'Fermi Paradox'?", answer: "The contradiction between the high probability of alien life in a huge universe and the total lack of evidence or contact so far" },
            { clue: "What metal is liquid at room temperature, and what other metal melts right in your hand at ~30°C?", answer: "Mercury (liquid at room temp) and Gallium (melts in your hand!)" }
          ]
        },
        {
          title: "Gaming & Tech History",
          clues: [
            { clue: "What classic 1980s puzzle video game was created by Soviet software engineer Alexey Pajitnov?", answer: "Tetris" },
            { clue: "In early computing, why did software glitches get called 'bugs'?", answer: "In 1947, Grace Hopper's team found an actual moth stuck inside a relay of the Harvard Mark II computer—popularizing 'debugging'" },
            { clue: "What does 'NPC' stand for in games, and how do people use it as internet slang today?", answer: "Non-Player Character; slang for someone who seems to follow a script or lacks original thought" },
            { clue: "In 1996 Japan, what were the original two Pokémon Game Boy versions (before Red & Blue internationally)?", answer: "Pokémon Red and Pokémon Green" },
            { clue: "Recite the classic 'Konami Code' cheat sequence from NES games like Contra!", answer: "Up, Up, Down, Down, Left, Right, Left, Right, B, A (Start)" }
          ]
        },
        {
          title: "Logic, Riddles & Wordplay",
          clues: [
            { clue: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "An echo" },
            { clue: "What 5-letter English word becomes shorter when you add two letters to it?", answer: "'Short' (+ er = shorter)" },
            { clue: "You have a 3-liter jug and a 5-liter jug, plus unlimited water. How do you measure exactly 4 liters?", answer: "Fill 5L -> pour into 3L (2L left). Empty 3L, pour 2L into 3L. Fill 5L, pour 1L to top off 3L -> 4L left in 5L!" },
            { clue: "What is a 'portmanteau' word? Give 2 examples (nerdy or everyday)!", answer: "A blend of two words: e.g., cosplay (costume+play), cyborg, pixel, podcast, brunch" },
            { clue: "The Monty Hall Problem: 3 doors (1 car, 2 goats). You pick #1. Host opens #3 (goat) and offers to let you switch to #2. Should you switch, stay, or does it not matter?", answer: "Switch! Switching gives a 2/3 chance of winning vs. 1/3 if you stay" }
          ]
        }
      ],
      final: {
        category: "CLASSIC BOARD GAMES",
        clue: "Originally patented in 1904 by Elizabeth Magie as 'The Landlord's Game' to warn against concentrated wealth, what is this iconic board game?",
        answer: "Monopoly"
      }
    },

    dominika: {
      name: "Dominika's Favorites (Trivia)",
      categories: [
        {
          title: "TV Series & Cinema",
          clues: [
            { clue: "In 'Gilmore Girls', what is the name of the cozy small town in Connecticut where Lorelai and Rory live—and what is the name of Luke's business?", answer: "Stars Hollow, and Luke's Diner" },
            { clue: "In 'A Beautiful Mind' (2001), Russell Crowe plays Nobel Prize-winning mathematician John Nash. Which branch of mathematics/economics did he revolutionize?", answer: "Game Theory (famous for the Nash Equilibrium)" },
            { clue: "'The Theory of Everything' tells the life story of physicist Stephen Hawking. What is the title of his bestselling 1988 book about the universe?", answer: "A Brief History of Time" },
            { clue: "In the modern 'Planet of the Apes' trilogy, what is the name of the intelligent chimpanzee leader played by Andy Serkis?", answer: "Caesar" },
            { clue: "In 'Gilmore Girls', before attending Yale University, Rory transfers to an elite private prep school. What is its name?", answer: "Chilton (Chilton Preparatory School)" }
          ]
        },
        {
          title: "Food, Curry & Czech Beer",
          clues: [
            { clue: "In Indian cuisine, what is the traditional cylindrical clay oven used to bake naan bread and roast meats called?", answer: "A tandoor" },
            { clue: "The world's first golden Pilsner lager was brewed in 1842 in which Czech city—and what is the famous brewery called?", answer: "Plzeň (Pilsen), and Pilsner Urquell" },
            { clue: "Which bright yellow-orange spice gives Indian curry its signature golden color?", answer: "Turmeric" },
            { clue: "In classic Italian pasta, what are the only two main ingredients (besides pasta and water) in 'Cacio e Pepe'?", answer: "Pecorino Romano cheese and black pepper" },
            { clue: "Gin gets its signature crisp, piney flavor from which small blue-purple berry?", answer: "Juniper berry" }
          ]
        },
        {
          title: "Spain, Portugal & Dubai",
          clues: [
            { clue: "Which famous unfinished basilica in Barcelona was designed by Antoni Gaudí and has been under construction since 1882?", answer: "La Sagrada Família" },
            { clue: "In Dubai, what is the name of the tallest building in the world—and roughly how tall is it (within 50 meters)?", answer: "Burj Khalifa (828 meters / 2,717 ft)" },
            { clue: "Lisbon is famous for its yellow trams and a soulful traditional Portuguese music genre. What is that music style called?", answer: "Fado" },
            { clue: "Olomouc in Czechia is famous for a UNESCO World Heritage Baroque monument in its Upper Square. What is it?", answer: "The Holy Trinity Column" },
            { clue: "Portugal's famous sweet fortified wine (Port) is named after which coastal city in northern Portugal?", answer: "Porto" }
          ]
        },
        {
          title: "Music, Nightlife & Culture",
          clues: [
            { clue: "Where does the word 'speakeasy' (for a hidden cocktail bar) come from historically?", answer: "1920s US Prohibition—patrons had to 'speak easy' (quietly) to avoid alerting police to illegal bars" },
            { clue: "Which iconic Swedish pop group sang 'Dancing Queen', 'Mamma Mia', and 'Gimme! Gimme! Gimme!'?", answer: "ABBA" },
            { clue: "In a classic Gin & Tonic, what bitter ingredient in tonic water makes the drink glow bright blue under UV blacklight?", answer: "Quinine" },
            { clue: "Which 2003 rock/club anthem by The Killers starts with 'Coming out of my cage and I've been doing just fine'?", answer: "'Mr. Brightside'" },
            { clue: "Czechia consistently ranks #1 in the world for what beer-related statistic?", answer: "Beer consumption per capita (most liters per person per year)" }
          ]
        },
        {
          title: "Semiconductors & Business",
          clues: [
            { clue: "Which chemical element (symbol Si, atomic number 14) is the foundational material used to make almost all modern microchips?", answer: "Silicon" },
            { clue: "What does 'Moore's Law' predict about the number of transistors on a microchip?", answer: "It doubles roughly every two years" },
            { clue: "In corporate leadership, what do the three most common 'C-level' titles—CEO, CFO, and COO—stand for?", answer: "Chief Executive Officer, Chief Financial Officer, and Chief Operating Officer" },
            { clue: "Which famous region in northern California is named after the semiconductor industry that boomed there in the 1950s–70s?", answer: "Silicon Valley" },
            { clue: "In B2B finance, what does it mean when a company is declared 'insolvent'?", answer: "It cannot pay its debts when they are due (or its liabilities exceed its assets)" }
          ]
        }
      ],
      final: {
        category: "GLOBAL TECH & SEMICONDUCTORS",
        clue: "Which single island produces over 60% of the world's semiconductors (and over 90% of the most advanced chips), largely thanks to a company called TSMC?",
        answer: "Taiwan (Taiwan Semiconductor Manufacturing Company)"
      }
    },

    worachon: {
      name: "Worachon's Favorites (Trivia)",
      categories: [
        {
          title: "Brain & Medicine",
          clues: [
            { clue: "Why can neurosurgeons perform an awake craniotomy without the patient feeling pain in the brain itself?", answer: "Brain tissue has no pain receptors (nociceptors)" },
            { clue: "What is the tough outermost membrane (the 'mother') that surrounds the brain and spinal cord—and causes pain when stretched?", answer: "The dura mater" },
            { clue: "Which muscular valve at the bottom of the stomach controls the flow of partially digested food into the small intestine?", answer: "The pyloric sphincter" },
            { clue: "Why do antibiotics kill bacteria effectively but have zero effect on viruses like influenza?", answer: "Viruses lack cell walls/ribosomes and replicate inside host cells" },
            { clue: "In 1928, Alexander Fleming accidentally discovered the world's first true antibiotic from a moldy Petri dish. What was it?", answer: "Penicillin" }
          ]
        },
        {
          title: "Physics & Optics",
          clues: [
            { clue: "What optical phenomenon traps light inside a fiber-optic cable's core using a lower-index cladding?", answer: "Total internal reflection" },
            { clue: "In 1621, which Dutch astronomer formulated the law relating angles of incidence and refraction (n1 sin θ1 = n2 sin θ2)?", answer: "Willebrord Snellius (Snell's Law)" },
            { clue: "What is the shift in frequency of a wave (sound or light) when its source moves toward or away from an observer?", answer: "The Doppler effect" },
            { clue: "What type of boundary occurs when two tectonic plates collide—often forming mountains or deep ocean trenches?", answer: "A convergent boundary (subduction zone)" },
            { clue: "Roughly how fast does light travel in a vacuum (in kilometers per second)?", answer: "~300,000 km/s (299,792 km/s)" }
          ]
        },
        {
          title: "History & Thailand",
          clues: [
            { clue: "On October 23, Thailand honors 'Wan Piyamaharaj' (King Chulalongkorn Day). Which Thai monarch is remembered by that title?", answer: "King Rama V (Chulalongkorn)" },
            { clue: "What lightweight, cork-lined sun hat became an iconic 19th-century symbol in Southeast Asia and colonial-era exploration?", answer: "A pith helmet" },
            { clue: "Which historic Thai capital was sacked in 1767 before the capital moved to Thonburi and then Bangkok?", answer: "Ayutthaya" },
            { clue: "In 1967, five Southeast Asian nations signed the Bangkok Declaration to found which regional organization?", answer: "ASEAN (Association of Southeast Asian Nations)" },
            { clue: "Thailand's capital is known internationally as Bangkok, but its traditional Thai name begins with which two words meaning 'City of Angels'?", answer: "Krung Thep (Krung Thep Maha Nakhon)" }
          ]
        },
        {
          title: "Science & Memes",
          clues: [
            { clue: "Which evolutionary biologist coined the word 'meme' in his 1976 book 'The Selfish Gene'?", answer: "Richard Dawkins" },
            { clue: "What does the gene-editing acronym CRISPR stand for (or what bacterial system inspired it)?", answer: "Clustered Regularly Interspaced Short Palindromic Repeats (bacterial immune defense)" },
            { clue: "Whose 1952 X-ray diffraction image ('Photo 51') was crucial to discovering the double-helix structure of DNA?", answer: "Rosalind Franklin" },
            { clue: "In genetics, what type of RNA carries the genetic code from DNA in the nucleus to a ribosome to build proteins?", answer: "mRNA (messenger RNA)" },
            { clue: "What is the powerhouse organelle of a eukaryotic cell that carries its own separate maternal DNA?", answer: "Mitochondrion (mitochondria)" }
          ]
        },
        {
          title: "Public Policy & Law",
          clues: [
            { clue: "In constitutional law, what are the three branches in the 'separation of powers'?", answer: "Executive, Legislative, and Judicial" },
            { clue: "What Latin legal principle means courts should follow previous judicial decisions (precedent)?", answer: "Stare decisis" },
            { clue: "Which UN index measures a country's development using life expectancy, education, and income—rather than GDP alone?", answer: "HDI (Human Development Index)" },
            { clue: "What ancient Greek ethical pledge—historically attributed to the 'Father of Medicine'—is associated with 'do no harm'?", answer: "The Hippocratic Oath" },
            { clue: "In economics, what term describes a cost or benefit of an activity that affects an unrelated third party (like pollution or vaccines)?", answer: "An externality" }
          ]
        }
      ],
      final: {
        category: "NEUROSCIENCE & MEDICAL HISTORY",
        clue: "Which 19th-century French physician discovered the brain region responsible for speech production—now named after him—by studying a patient nicknamed 'Tan'?",
        answer: "Paul Broca (Broca's area)"
      }
    },

    clemens: {
      name: "Clemens' Favorites (Trivia)",
      categories: [
        {
          title: "Flight & Aerodynamics",
          clues: [
            { clue: "In aerodynamics, what happens to a glider's wing when the 'angle of attack' becomes too steep and airflow separates?", answer: "An aerodynamic stall (loss of lift)" },
            { clue: "What rising columns of warm air allow motorless sailplanes and eagles to climb high without an engine?", answer: "Thermals" },
            { clue: "Which 19th-century German aviation pioneer—the 'Glider King'—made over 2,000 documented flights near Berlin before 1896?", answer: "Otto Lilienthal" },
            { clue: "Which Swiss mathematician's principle explains why faster-moving air over a curved wing creates lower pressure?", answer: "Bernoulli's principle (Daniel Bernoulli)" },
            { clue: "What speed threshold—roughly 1,235 km/h at sea level—is known as Mach 1?", answer: "The speed of sound" }
          ]
        },
        {
          title: "Cinema & Literature",
          clues: [
            { clue: "Who wrote the classic 1929 World War I anti-war novel 'All Quiet on the Western Front' ('Im Westen nichts Neues')?", answer: "Erich Maria Remarque" },
            { clue: "Which Dutch filmmaker directed the 1997 satirical sci-fi film 'Starship Troopers'—as well as 'RoboCop' and 'Total Recall'?", answer: "Paul Verhoeven" },
            { clue: "Who wrote the 1959 sci-fi novel 'Starship Troopers' (played straight, unlike Verhoeven's satire)?", answer: "Robert A. Heinlein" },
            { clue: "Which Scottish-founded Rockstar studio created the 'Grand Theft Auto' series?", answer: "Rockstar North (formerly DMA Design)" },
            { clue: "In George Orwell's '1984', what is the name of the totalitarian state's all-seeing surveillance figurehead?", answer: "Big Brother" }
          ]
        },
        {
          title: "Cold War & History",
          clues: [
            { clue: "What was the full German name (or English translation) of East Germany's secret police, the 'Stasi'?", answer: "Ministerium für Staatssicherheit (Ministry for State Security)" },
            { clue: "On what exact date (day, month, year) did the Berlin Wall fall?", answer: "November 9, 1989" },
            { clue: "In 1955, whose refusal to give up her bus seat sparked the Montgomery Bus Boycott in the US Civil Rights Movement?", answer: "Rosa Parks" },
            { clue: "In which 1963 Washington, D.C. speech did Martin Luther King Jr. deliver the famous 'I Have a Dream' refrain?", answer: "The March on Washington for Jobs and Freedom" },
            { clue: "What was the famous Cold War Allied crossing point between the American and Soviet zones in Berlin?", answer: "Checkpoint Charlie" }
          ]
        },
        {
          title: "Sports & Games",
          clues: [
            { clue: "In standard 8-ball pool, which numbered ball is solid black and must be pocketed last to win?", answer: "The 8-ball" },
            { clue: "In cricket, how many wooden stumps make up a single wicket?", answer: "Three stumps" },
            { clue: "What is the exact official distance of a marathon race (in kilometers or miles)?", answer: "42.195 km (26.2 miles)" },
            { clue: "In the Tour de France, what color jersey is worn by the overall race leader?", answer: "Yellow (Maillot Jaune)" },
            { clue: "In the classic grid game 'Connect Four' ('Vier Gewinnt'), how many columns wide is the standard board?", answer: "7 columns (by 6 rows)" }
          ]
        },
        {
          title: "Berlin, Bavaria & Mallorca",
          clues: [
            { clue: "What is the name of Munich's famous open-air food market near Marienplatz?", answer: "Viktualienmarkt" },
            { clue: "Which large glacial lake southwest of Munich is famous for views of the Alps and King Ludwig II's tragic end?", answer: "Starnberger See (Lake Starnberg)" },
            { clue: "What is the capital city of Mallorca and the Balearic Islands?", answer: "Palma (Palma de Mallorca)" },
            { clue: "The Bavarian/Austrian greeting 'Servus' comes from a Latin word meaning what?", answer: "Servant / slave ('at your service')" },
            { clue: "Which 18th-century neoclassical monument in Berlin was topped by the four-horse Quadriga chariot?", answer: "The Brandenburg Gate" }
          ]
        }
      ],
      final: {
        category: "WORLD LITERATURE & FILM",
        clue: "In 1930, the Hollywood film adaptation of 'All Quiet on the Western Front' won Best Picture—only to be banned in Germany by which future Nazi Propaganda Minister?",
        answer: "Joseph Goebbels"
      }
    },

    hania: {
      name: "Hania's Favorites (Trivia)",
      categories: [
        {
          title: "Cosmetic Chemistry",
          clues: [
            { clue: "Azelaic acid is prized for treating acne and hyperpigmentation—but why is it notoriously difficult to formulate into a smooth cream?", answer: "It is practically insoluble in cold water (and most common oils), requiring high heat or special solvents" },
            { clue: "Naturally occurring azelaic acid is produced on healthy human skin by which yeast species—and can also be derived from grains like barley and wheat?", answer: "Malassezia furfur (Pityrosporum ovale)" },
            { clue: "In cosmetic chemistry, what is an 'emulsion'—and what role does a surfactant/emulsifier play?", answer: "A stable blend of oil and water; the emulsifier bridges both phases so they don't separate" },
            { clue: "In sunscreen testing, what do the letters 'SPF' stand for—and does SPF measure protection primarily against UVA or UVB?", answer: "Sun Protection Factor; it measures UVB (burning) protection" },
            { clue: "In skincare, which vitamin's active amide form is Niacinamide, and which vitamin is Retinol derived from?", answer: "Niacinamide = Vitamin B3; Retinol = Vitamin A" }
          ]
        },
        {
          title: "RP & Connected Speech",
          clues: [
            { clue: "In British English (SSBE), when you pronounce 'Wednesday' as /ˈwenzdeɪ/ or 'handbag' as /ˈhæmbæɡ/, which connected-speech process drops the /d/?", answer: "Elision (specifically consonant cluster elision)" },
            { clue: "In 'hot tea' or 'black coat', you hold the consonant once rather than releasing it twice. What is this phonological term?", answer: "Gemination" },
            { clue: "When a British speaker says 'law‿r‿and order' or 'the idea‿r‿of it', what is that inserted /r/ sound called?", answer: "Intrusive /r/" },
            { clue: "What phonological process turns 'would you' into /wʊdʒu/ and 'last year' into /lɑːstʃɪə/?", answer: "Yod-coalescence (/t/+/j/ → /tʃ/, /d/+/j/ → /dʒ/)" },
            { clue: "In British intonation, what does a Fall-Rise (↘↗) pitch contour on 'Well, it's interesting...' usually signal?", answer: "Polite reservation, hesitation, or an unspoken 'but...'" }
          ]
        },
        {
          title: "British Subtext & Idioms",
          clues: [
            { clue: "What rhetorical figure of speech uses understatement by negating the opposite—like saying 'not half bad' to mean 'very good'?", answer: "Litotes" },
            { clue: "When a British colleague says, 'With the greatest respect, I'm not entirely convinced,' what is the actual subtext?", answer: "They strongly disagree / think your argument has a major blind spot" },
            { clue: "If someone says 'Let's park that for now until the dust settles,' what do they really mean?", answer: "The idea is dead on arrival / let's drop it gracefully and move on" },
            { clue: "What does the idiom 'iron out a few creases' mean—and what is the American English word for 'crease'?", answer: "Fix small remaining problems; US English uses 'wrinkle'" },
            { clue: "Which London-based business newspaper has been printed on salmon-pink paper since 1893?", answer: "The Financial Times (FT)" }
          ]
        },
        {
          title: "Style, Judo & Silhouettes",
          clues: [
            { clue: "In fashion styling, what is the opposite of an 'hourglass' silhouette—characterized by broad shoulders and narrow hips?", answer: "An inverted triangle (or reverse triangle)" },
            { clue: "In 1882, which Japanese educator founded Judo ('the gentle way') at the Kodokan in Tokyo?", answer: "Jigoro Kano" },
            { clue: "What 3D technical drawing method—from the Greek for 'equal measure'—draws X, Y, and Z axes at 120° angles?", answer: "Isometric projection (isometry)" },
            { clue: "In 1999's 'The Matrix', who designed the iconic dark monochrome trench coats and minimalist silhouettes?", answer: "Kym Barrett" },
            { clue: "What Polish national holiday is celebrated every year on November 11?", answer: "Polish Independence Day (Święto Niepodległości)" }
          ]
        },
        {
          title: "Survival & Borders",
          clues: [
            { clue: "In the 'Rule of Threes' for castaway survival, how long can a person typically survive without air, without water, and without food?", answer: "3 minutes without air, 3 days without water, 3 weeks without food" },
            { clue: "Which desert-island survival device uses sunlight and plastic sheeting to condense drinkable fresh water from seawater?", answer: "A solar still" },
            { clue: "Who wrote the 1719 castaway novel 'Robinson Crusoe'—inspired by Scottish sailor Alexander Selkirk?", answer: "Daniel Defoe" },
            { clue: "Which Baltic country—famous for digital e-residency and medieval Tallinn—did Hania note has surprisingly pricey hotels compared to $8/night in Asia?", answer: "Estonia" },
            { clue: "What does 'Murphy's Law' famously state?", answer: "Anything that can go wrong will go wrong" }
          ]
        }
      ],
      final: {
        category: "BRITISH PHONETICS & HISTORY",
        clue: "Which British phonetician—often cited as the real-life inspiration for Professor Henry Higgins in 'Pygmalion'—taught and helped standardize Received Pronunciation in the early 20th century?",
        answer: "Daniel Jones (or Henry Sweet, the primary model for Shaw's Henry Higgins)"
      }
    },

    juanlan: {
      name: "Young Woman & the Sea (Creative Writing)",
      categories: [
        {
          title: "Plot & Characters",
          clues: [
            { clue: "Who is the real-life American swimmer played by Daisy Ridley in 'Young Woman and the Sea'?", answer: "Gertrude 'Trudy' Ederle" },
            { clue: "What childhood illness damaged Trudy's hearing, and why did her mother insist she learn to swim?", answer: "Measles; her mother wanted her daughters to survive after a deadly ferry/maritime disaster" },
            { clue: "Who was the trailblazing coach at the Women's Swimming Association (WSA) who trained and believed in Trudy?", answer: "Charlotte Epstein ('Eppy')" },
            { clue: "What disappointing result did Trudy experience at the 1924 Paris Olympics, and why?", answer: "She only won bronze individually because Coach Wolffe kept the women from training properly on the ship" },
            { clue: "How did Coach Jabez Wolffe betray Trudy during her first English Channel attempt?", answer: "He forced her out of the water / sabotaged the swim when she paused, claiming she needed rescuing" }
          ]
        },
        {
          title: "The Channel & Obstacles",
          clues: [
            { clue: "Which famous body of water—over 21 miles wide between France and England—did Trudy swim across?", answer: "The English Channel" },
            { clue: "⚡ SPEED CHALLENGE: Run and find something BIG and ROUND in your room in 10 seconds! Hold it up and pretend it's a giant jellyfish in the Channel!", answer: "Fun movement break! Bonus: describe what it feels like in 1 sensory word." },
            { clue: "Why was swimming at night extra scary for Trudy with her worsening hearing loss?", answer: "It was pitch-black, she couldn't hear well, and she had to follow the support boat's lights" },
            { clue: "🎭 ACT IT OUT: You have 10 seconds to act out swimming through freezing waves and jellyfish—NO talking!", answer: "Fun acting break! Check if he shows cold/pain/determination with his face and arms." },
            { clue: "Besides jellyfish and cold water, name 2 other dangers in the Channel—and how Trudy's boat crew helped her.", answer: "Riptides, huge waves, darkness, exhaustion; the crew shone lights, cheered, and guided her" }
          ]
        },
        {
          title: "Show, Don't Tell (Scenes)",
          clues: [
            { clue: "Scene 1: Describe Trudy stepping into the Channel WITHOUT saying 'cold', 'freezing', or 'ice'.", answer: "e.g., 'The dark water bit into her ankles like needles, stealing the breath from her lungs.'" },
            { clue: "🔍 SCAVENGER HUNT: Grab something COLD, SOFT, or SHINY in your room in 10 seconds—then describe it in 1 'Show, Don't Tell' sentence!", answer: "Open-ended sensory description (touch or sight, no boring adjectives!)" },
            { clue: "Scene 3: Show Trudy's anger at Coach Wolffe WITHOUT saying 'angry' or 'mad' (show her face or hands!).", answer: "e.g., 'Her jaw locked, her knuckles turned white on the boat rail, and she glared at him.'" },
            { clue: "Scene 4: Show Trudy's exhaustion in the final 100 meters WITHOUT saying 'tired' or 'exhausted'.", answer: "e.g., 'Each stroke felt like dragging heavy rocks, and her eyelids burned with salt.'" },
            { clue: "📣 VICTORY MOMENT: Stand up, do a 3-second victory pose, and give a 1-sentence 'Show, Don't Tell' line as Trudy touches England!", answer: "Open-ended sensory climax (legs shaking, sand under her feet, crowd roaring)" }
          ]
        },
        {
          title: "Sensory Vocab & Craft",
          clues: [
            { clue: "What does 'pitch-black' mean? Use it in a sentence about the Channel swim.", answer: "Completely dark; impossible to see (e.g., 'The Channel turned pitch-black after midnight.')" },
            { clue: "What does it mean to 'grit your teeth'? What emotion or attitude does it show?", answer: "To clench your teeth together to endure pain, anger, or push through something tough (determination)" },
            { clue: "Explain the word 'numb' and describe what happens to a swimmer's hands in icy water.", answer: "Unable to feel anything (e.g., 'Her fingers went completely numb after hours in the sea.')" },
            { clue: "Use the verb 'surge' in a dramatic sentence about ocean waves or Trudy's energy.", answer: "To move suddenly and powerfully forward (e.g., 'A massive wave surged over her head.')" },
            { clue: "Use BOTH 'against all odds' and 'break through' in 1–2 sentences about Trudy's triumph.", answer: "e.g., 'Against all odds, Trudy broke through the crashing waves and reached England.'" }
          ]
        },
        {
          title: "What If? (Story Twists)",
          clues: [
            { clue: "POV Shift: Tell the moment Trudy's father first watches her swim—in 2 sentences from HIS point of view.", answer: "Open-ended perspective shift (proud, surprised, or worried)" },
            { clue: "What If?: Imagine Trudy's sister Meg swam beside her across the Channel. How would that change the story?", answer: "Open-ended creative comparison (teamwork, pacing, emotional support)" },
            { clue: "Dialogue Challenge: Write 2 lines of dialogue between Trudy and Coach Eppy right before the final swim.", answer: "Open-ended character voice (encouraging, determined, defiant)" },
            { clue: "Emergency Twist: Imagine the support boat's lantern goes out in thick fog. Write 2 sentences showing how Trudy reacts.", answer: "Open-ended sensory writing (e.g., relying on the rhythm of her strokes, splashing waves, and grit)" },
            { clue: "Headline Writer: Create a dramatic 1926 newspaper headline and 1-sentence subheading for Trudy's victory.", answer: "Open-ended punchy headline (e.g., 'WOMAN CONQUERS THE CHANNEL: EDERLE SHATTERS MEN'S RECORD!')" }
          ]
        }
      ],
      final: {
        category: "YOUNG WOMAN & THE SEA",
        clue: "In August 1926, Gertrude 'Trudy' Ederle swam the English Channel in 14 hours and 31 minutes—roughly how much faster was she than the men's world record at the time?",
        answer: "Nearly 2 hours faster (1 hour and 59 minutes faster than the men's record!)"
      }
    },

    jack: {
      name: "Jack's Favorites (Trivia)",
      categories: [
        {
          title: "Global Finance & Wall St.",
          clues: [
            { clue: "What two animals symbolize a rising market versus a falling market?", answer: "Bull (rising) and Bear (falling)" },
            { clue: "What does the acronym 'IPO' stand for when a private company first sells shares to the public?", answer: "Initial Public Offering" },
            { clue: "Which major 158-year-old US investment bank collapsed into bankruptcy on September 15, 2008?", answer: "Lehman Brothers" },
            { clue: "What is the name of the US central bank system established in 1913?", answer: "The Federal Reserve (The Fed)" },
            { clue: "In corporate finance, what does 'EBITDA' stand for?", answer: "Earnings Before Interest, Taxes, Depreciation, and Amortization" }
          ]
        },
        {
          title: "Hong Kong & New York",
          clues: [
            { clue: "Since 1983, the Hong Kong Dollar (HKD) has been officially pegged to which foreign currency (at ~7.75–7.85)?", answer: "The US Dollar (USD)" },
            { clue: "Which famous Pritzker Prize-winning architect designed Hong Kong's geometric Bank of China Tower?", answer: "I. M. Pei" },
            { clue: "What historic green-and-white ferry fleet has crossed Victoria Harbour between Hong Kong Island and Kowloon since 1888?", answer: "The Star Ferry" },
            { clue: "What 3.5-ton bronze sculpture stands near Bowling Green in Manhattan's Financial District?", answer: "The Charging Bull" },
            { clue: "What is the name of Hong Kong's main stock exchange index of top-performing blue-chip companies?", answer: "The Hang Seng Index" }
          ]
        },
        {
          title: "Economics & Markets",
          clues: [
            { clue: "In 1776's 'The Wealth of Nations', what metaphor did Adam Smith use for self-interest guiding free markets?", answer: "The Invisible Hand" },
            { clue: "When market interest rates rise, what generally happens to the price of existing fixed-rate bonds?", answer: "Bond prices fall (inverse relationship)" },
            { clue: "What does 'CPI' stand for as the primary measure of consumer inflation?", answer: "Consumer Price Index" },
            { clue: "Which legendary investor—the 'Oracle of Omaha'—chairs Berkshire Hathaway?", answer: "Warren Buffett" },
            { clue: "What term describes a situation where inflation is high while economic growth stagnates?", answer: "Stagflation" }
          ]
        },
        {
          title: "Combat Sports & Boxing",
          clues: [
            { clue: "What is the 8-sided caged fighting arena used in the UFC called?", answer: "The Octagon" },
            { clue: "In boxing, what stance is used by a left-handed fighter who leads with their right hand and right foot forward?", answer: "Southpaw" },
            { clue: "In 1974, Muhammad Ali defeated George Foreman in Kinshasa, Zaire in a fight famously nicknamed what?", answer: "The Rumble in the Jungle" },
            { clue: "In boxing and MMA, what is the difference between a 'KO' and a 'TKO'?", answer: "KO = Knockout (fighter cannot continue/beat the count); TKO = Technical Knockout (referee/doctor/corner stops the fight)" },
            { clue: "Which 1867 set of rules introduced padded gloves and 3-minute rounds to modern boxing?", answer: "The Marquess of Queensberry Rules" }
          ]
        },
        {
          title: "Tech, Visas & Strategy",
          clues: [
            { clue: "In US immigration, which visa is reserved specifically for individuals with 'extraordinary ability' (rather than the lottery-based H-1B)?", answer: "The O-1 visa" },
            { clue: "Which co-founder and CEO turned NVIDIA into the world's leading AI chip company?", answer: "Jensen Huang" },
            { clue: "Which famous street in Menlo Park, California is synonymous with Silicon Valley venture capital firms?", answer: "Sand Hill Road" },
            { clue: "Who wrote the ancient Chinese military treatise 'The Art of War'?", answer: "Sun Tzu" },
            { clue: "In game theory, what state occurs when no player can improve their outcome by unilaterally changing their own strategy?", answer: "A Nash Equilibrium" }
          ]
        }
      ],
      final: {
        category: "FINANCIAL HISTORY",
        clue: "In 1971, which US President ended the direct convertibility of the US dollar to gold, effectively ending the Bretton Woods system?",
        answer: "Richard Nixon (The Nixon Shock)"
      }
    },
    gabriele: {
      name: "Gabriele's London Trivia (Fun & Accessible)",
      categories: [
        {
          title: "Famous Faces & Pop Culture",
          clues: [
            { clue: "Which global pop superstar—born in Tottenham, North London—named her albums '19', '21', '25', and '30' after her ages?", answer: "Adele" },
            { clue: "Taylor Swift's song 'London Boy' mentions Camden Market, Soho, and Highgate—and was inspired by which British actor she dated for six years?", answer: "Joe Alwyn" },
            { clue: "Which British actor—famous for 'Paddington 2' and 'Notting Hill'—played a travel bookshop owner on London's Portobello Road?", answer: "Hugh Grant" },
            { clue: "Which former Spice Girl and fashion designer married football legend David Beckham, who grew up in East London?", answer: "Victoria Beckham (Posh Spice)" },
            { clue: "Which real-life London train station has a famous 'Platform 9¾' photo spot with a luggage trolley disappearing into a brick wall for Harry Potter fans?", answer: "King's Cross Station" }
          ]
        },
        {
          title: "Movies, TV & Music",
          clues: [
            { clue: "Which famous animated bear from 'Darkest Peru' is named after the London train station where the Brown family finds him?", answer: "Paddington Bear (Paddington Station)" },
            { clue: "Which iconic 1969 Beatles album cover shows the band walking across a zebra crossing outside a recording studio in North London?", answer: "Abbey Road" },
            { clue: "In the BBC series 'Sherlock' (with Benedict Cumberbatch) and the original books, what is Sherlock Holmes's famous London street address?", answer: "221B Baker Street" },
            { clue: "Which hit Netflix series about the British Royal Family had to film its 'Buckingham Palace' scenes in other grand buildings because the real Palace doesn't allow commercial filming inside?", answer: "The Crown" },
            { clue: "In 'Spider-Man: Far From Home', the final battle takes place on which famous London bridge—which tourists often mistakenly call 'London Bridge'?", answer: "Tower Bridge" }
          ]
        },
        {
          title: "Secret Side of Landmarks",
          clues: [
            { clue: "Everyone calls the giant clock tower at Parliament 'Big Ben'—even though Big Ben is actually the nickname of the bell inside. What is the tower itself officially called?", answer: "The Elizabeth Tower" },
            { clue: "How can you tell from outside Buckingham Palace whether the King is currently at home?", answer: "By the flag on the roof (the Royal Standard flies when he's home; the Union Jack flies when he's away)" },
            { clue: "Which world-famous annual sports tournament in Southwest London requires players to wear all-white clothing while fans eat strawberries and cream?", answer: "Wimbledon (tennis)" },
            { clue: "In a corner of Trafalgar Square, there is a tiny hollow stone box once wired to police headquarters—famous for being what?", answer: "London's smallest police station (fitting only 1–2 officers)" },
            { clue: "At the Tower of London, why are at least six black ravens always kept on the grounds?", answer: "Legend says that if the ravens ever leave, the Tower and the British monarchy will fall." }
          ]
        },
        {
          title: "Quirky London Life",
          clues: [
            { clue: "London's famous subway is called 'The Tube' because of its round tunnels. What 3-word warning is famously heard on its platforms?", answer: "'Mind the Gap'" },
            { clue: "Why were London's classic double-decker buses originally painted bright red in 1907?", answer: "To make one bus company stand out from competitors in traffic—and it became London's iconic symbol!" },
            { clue: "To drive a famous London Black Cab, drivers spend 3–4 years memorizing ~25,000 streets without GPS. What is this famously tough test called?", answer: "The Knowledge" },
            { clue: "On London Tube escalators, why do locals get annoyed if you stand still on the LEFT side?", answer: "The right side is for standing, and the left side is strictly for walking!" },
            { clue: "According to classic London cab tradition, why are Black Cabs built with such tall roofs inside?", answer: "So a passenger could sit comfortably while wearing a top hat!" }
          ]
        },
        {
          title: "Weird & Fun London",
          clues: [
            { clue: "What classic British takeaway dish—popular all over London—was originally wrapped in old newspaper to keep it hot?", answer: "Fish and chips" },
            { clue: "On one tiny street outside London's luxury Savoy Hotel, cars legally drive on the RIGHT instead of the left. Why?", answer: "So taxis and carriages can pull right up to the hotel/theatre door and let VIP guests step straight onto the sidewalk." },
            { clue: "Since 1664, what giant, long-beaked birds (originally a gift from Russia) have lived wild in St. James's Park right near Buckingham Palace?", answer: "Pelicans" },
            { clue: "London became the world's first 'National Park City' in 2019—and thousands of bright green tropical birds have surprisingly taken over its parks. What kind of birds are they?", answer: "Parakeets (green parrots)" },
            { clue: "Many old metal street posts (bollards) on London sidewalks are actually repurposed 19th-century weapons buried upside down. What were they originally?", answer: "Cannons (left over from the Napoleonic Wars)" }
          ]
        }
      ],
      final: {
        category: "SURPRISING LONDON",
        clue: "Buckingham Palace has 775 rooms—including a cinema, a post office, and even its own private ATM (cash machine) in the basement. Who is that ATM exclusively for?",
        answer: "The Royal Family (and palace staff)"
      }
    },

    bernie_ops: {
      name: "Bernie's Field Ops & USAR Jeopardy (Lessons 1–6) 🚑",
      categories: [
        {
          title: "1. Emergency & Triage 🚑",
          clues: [
            {
              clue: "Define these 3 words in simple English: SURVIVOR • TRAPPED • DISPLACED.",
              answer: "Survivor = a person who is alive after a disaster. Trapped = stuck and cannot get out. Displaced = forced to leave their home.",
              spanish: "Survivor (sobreviviente), Trapped (atrapado/a bajo escombros o en un lugar), Displaced (desplazado/a, sin hogar)."
            },
            {
              clue: "What are the medical triage colors, and what does RED (Critical) mean?",
              answer: "Red (Critical / Priority 1), Yellow (Delayed / Serious), Green (Minor / Walking wounded), Black (Deceased). Red means life-threatening and needs immediate help!",
              spanish: "Colores de triaje: Rojo (crítico, prioridad 1), Amarillo (demorado/serio), Verde (leve/ambulatorio), Negro (fallecido)."
            },
            {
              clue: "Say this in English: 'Tenemos una escasez crítica de agua limpia y un corte de luz.'",
              answer: "We have a critical shortage of clean water and a power outage (or blackout).",
              spanish: "Escasez = shortage • Corte de luz = power outage / blackout."
            },
            {
              clue: "A patient is UNCONSCIOUS and BLEEDING. Request an urgent MEDEVAC in one clean radio sentence!",
              answer: "Requesting immediate medevac for one critical patient—unconscious and bleeding. Urgent doctor needed!",
              spanish: "Pedí evacuación médica urgente: 'Requesting immediate medevac...' (inconsciente = unconscious, sangrando = bleeding)."
            },
            {
              clue: "30-Second Rapid SitRep! Report: 1) Collapsed bridge (passable for 4x4 only), 2) 3 walking wounded, 3) 2 critical patients needing medevac.",
              answer: "SitRep: The main bridge has collapsed; access is passable for 4x4 only. We have 3 walking wounded and 2 critical patients. Requesting immediate medevac!",
              spanish: "Armá un SitRep rápido en 3 partes: puente colapsado (solo 4x4), 3 heridos leves (walking wounded) y 2 críticos para medevac."
            }
          ]
        },
        {
          title: "2. Crowd Safety & Search 📢",
          clues: [
            {
              clue: "Shout 2 urgent imperatives to keep bystanders away from an unstable building!",
              answer: "Step back! Keep clear of the building! Do not enter! Move to the safe zone immediately!",
              spanish: "Comandos firmes a la multitud: 'Step back!' (¡Atrás!) y 'Keep clear of the building!' (¡Manténganse lejos del edificio!)."
            },
            {
              clue: "What is the difference between RUBBLE and DEBRIS? (Watch the silent 's' in debris!)",
              answer: "Rubble is broken concrete and bricks from a collapsed building. Debris (/dəˈbriː/) is any scattered broken material, wood, metal, or glass.",
              spanish: "Rubble = escombros pesados de concreto/ladrillo. Debris (la S final es muda: de-BRÍI) = restos sueltos, vidrios, madera."
            },
            {
              clue: "Acoustic Search Discipline: You need total silence to listen for trapped victims. What do you shout?",
              answer: "Everyone quiet! Listen! Silence, please!",
              spanish: "Disciplina de silencio acústico: 'Everyone quiet! Listen!' (¡Silencio todos! ¡Escuchen!)."
            },
            {
              clue: "Ask a trapped survivor 2 clear questions to locate them under the rubble!",
              answer: "Is anyone trapped inside? Can anyone hear me? Make noise if you can! Describe where you are!",
              spanish: "Preguntá para localizar víctimas: 'Is anyone trapped inside?' y 'Can anyone hear me? Make noise if you can!'"
            },
            {
              clue: "Explain the difference between a SAFE ZONE and a SHELTER in field logistics.",
              answer: "A safe zone is an immediate, open outdoor area free from falling debris and hazards. A shelter is an organized facility with water, food, beds, and protection.",
              spanish: "Safe zone = zona segura abierta de evacuación inmediata. Shelter = albergue/refugio organizado con agua, comida y camas."
            }
          ]
        },
        {
          title: "3. Heavy Rescue & USAR 🏗️",
          clues: [
            {
              clue: "What does ETA stand for, and how do you ask dispatch when heavy rescue will arrive?",
              answer: "ETA = Estimated Time of Arrival. 'What is the ETA on heavy rescue?'",
              spanish: "ETA = Hora estimada de llegada. Preguntá: 'What is the ETA on heavy rescue?'"
            },
            {
              clue: "Name 3 heavy rescue or search tools from Lesson 4!",
              answer: "Hydraulic cutters and spreaders, rotary rescue saw, snake camera, lifting airbags, structural timber shoring, spine board.",
              spanish: "Nombrá 3 herramientas USAR: spreaders (expansores), rotary saw (motosierra), snake camera, lifting airbags, timber shoring."
            },
            {
              clue: "INSARAG 2×2m Marking Cross: You see an orange 'X' on a wall. What do the TOP and RIGHT quadrants tell you?",
              answer: "TOP = Date, time, and USAR team ID. RIGHT = Hazards identified (like gas leaks, live power lines, or structural instability).",
              spanish: "Arriba (TOP) = fecha, hora y equipo. Derecha (RIGHT) = peligros identificados (gas leak, live power, riesgo de colapso)."
            },
            {
              clue: "Say this tactical warning clearly: 'Hazards identified: confirmed gas leak and risk of secondary collapse. Structural timber shoring needed.'",
              answer: "Clean delivery! Watch 'confirmed', 'secondary collapse', and 'ssss-tructural timber shoring' (no Ghost E!).",
              spanish: "Leelo en voz alta con claridad: fuga de gas confirmada, riesgo de colapso secundario y necesidad de apuntalamiento."
            },
            {
              clue: "Rescue Sequence: A victim is pinned under a concrete slab. Explain in 3 steps how you LOCATE, STABILIZE, and LIFT!",
              answer: "1) Locate with a snake camera or acoustic device. 2) Stabilize the structure with timber shoring. 3) Lift the slab with lifting airbags or hydraulic spreaders.",
              spanish: "3 pasos: 1) Ubicar (snake camera / acoustic), 2) Estabilizar (timber shoring), 3) Levantar/extraer (lifting airbags / spreaders)."
            }
          ]
        },
        {
          title: "4. Should vs. Would 🧭",
          clues: [
            {
              clue: "Silent 'L' Check! Pronounce SHOULD and WOULD 2x, then say: 'What should we do?' vs. 'What would you do?'",
              answer: "SHOULD = /ʃʊd/ (rhymes with good, no L!). WOULD = /wʊd/ (sounds like wood, no L!).",
              spanish: "¡La L es completamente muda! Should = SHUD • Would = WUD (igual que madera 'wood')."
            },
            {
              clue: "What is the difference between SHOULD and WOULD in disaster relief?",
              answer: "SHOULD = official protocol, SOP, safety rules ('What should we do?'). WOULD = hypothetical dilemma or personal tactical judgment ('What would you do if...?').",
              spanish: "SHOULD = protocolo / lo que se debe hacer por regla. WOULD = situación hipotética / qué harías vos si..."
            },
            {
              clue: "Complete the protocol with SHOULD or SHOULDN'T: 'Responders ___ enter without timber shoring. We ___ establish a 50-meter perimeter.'",
              answer: "Responders SHOULDN'T enter without timber shoring. We SHOULD establish a 50-meter perimeter.",
              spanish: "Protocolo de seguridad: shouldn't enter (no deberían entrar) • should establish (deberíamos establecer)."
            },
            {
              clue: "Complete the dilemma with WOULD: 'If the main access road is impassable, I ___ divert the convoy to Route 4.'",
              answer: "If the main access road is impassable, I WOULD divert the convoy to Route 4.",
              spanish: "Dilema con 'if': 'I would divert the convoy...' (yo desviaría el convoy a la Ruta 4)."
            },
            {
              clue: "Field Dilemma: The crane is delayed by 2 hours, and a trapped victim is bleeding. What SHOULD you do by protocol, and what WOULD you do right now?",
              answer: "Protocol (should): We should wait for shoring before entering. Action (would): I would stabilize the victim with fluids, keep talking to them, and call for lifting airbags.",
              spanish: "Combiná los dos: qué dice el protocolo (We should...) y qué harías vos en ese caso urgente (I would...)."
            }
          ]
        },
        {
          title: "5. Sound, Radio & Fixes 🎙️",
          clues: [
            {
              clue: "Radio Basics: How do you confirm you received a message, and how do you ask someone to repeat it?",
              answer: "'Copy that.' (confirm) / 'Say again, please.' (repeat).",
              spanish: "Confirmar recepción = 'Copy that.' • Pedir que repitan = 'Say again, please.'"
            },
            {
              clue: "Ghost 'E' Hack (Snake Hiss 'ssss-'): Say these 4 words cleanly WITHOUT adding 'e-' in front: SPREADERS • STRUCTURE • STABILIZE • STEP BACK.",
              answer: "ssss-PREADERS, ssss-TRUCTURE, ssss-TABILIZE, ssss-TEP BACK! (No 'es-' at the start!)",
              spanish: "Técnica de la serpiente 'ssss-': empezá con el siseo directo sin decir 'es-preaders' ni 'es-tructure'."
            },
            {
              clue: "Lip-Bite /v/ vs /b/: Bite your lower lip and vibrate on these 5 words: VICTIM • VOID • VALVE • EVACUATE • SURVIVOR.",
              answer: "Top teeth on bottom lip + buzz: V-ictim, V-oid, V-alve, e-V-acuate, sur-V-i-V-or!",
              spanish: "Dientes superiores sobre el labio inferior vibrando: /v/ (victim, void, valve, evacuate, survivor), distinto de /b/."
            },
            {
              clue: "Fix this slip from our lessons: ❌ 'I don't listen to you on the radio.' → What is the clean sentence, and why?",
              answer: "'I can't hear you.' (HEAR = perceive sound with your ears; LISTEN = pay attention on purpose.)",
              spanish: "Hear = oír el sonido ('I can't hear you'). Listen = escuchar con atención ('Listen to my voice')."
            },
            {
              clue: "Full Radio Check! Say clearly: 'Command, main road is impassable—passable for 4x4 only. Requesting two water tankers at the distribution point. What is your ETA? Over.'",
              answer: "Crisp, steady radio delivery! Bonus points for zero 'Ghost E' and clear 'ETA'!",
              spanish: "Lectura completa de radio: camino intransitable (solo 4x4), pedido de 2 camiones cisterna en el punto de distribución y consulta de ETA."
            }
          ]
        }
      ],
      final: {
        category: "INCIDENT COMMAND SITREP 📻",
        clue: "Deliver a complete 3-part radio SitRep (30–45 seconds): 1) Location & Road Access (collapsed 3-story building, Route 2 blocked), 2) Casualties & Hazards (2 critical Red victims, confirmed gas leak), 3) Request & ETA (heavy rescue + medevac).",
        answer: "Example: 'Command, this is Bernie at Sector 4. We have a collapsed 3-story building; Route 2 is impassable, passable for 4x4 only. Hazards identified: confirmed gas leak. We have 2 critical patients. Requesting heavy rescue and immediate medevac. What is your ETA? Over.'",
        spanish: "Desafío final de radio (30–45s): 1) Lugar y acceso (edificio colapsado, Ruta 2 bloqueada), 2) Heridos y peligros (2 críticos rojos, fuga de gas confirmada), 3) Pedido y ETA (rescate pesado + medevac)."
      }
    },

    bernie_pfa: {
      name: "Bernie's Human Interaction & PFA Jeopardy (Lessons 6–7) 🤝",
      categories: [
        {
          title: "1. Arrive & Ground 🤝",
          clues: [
            {
              clue: "Approach a scared survivor calmly and introduce yourself in 2 short, warm A2 sentences.",
              answer: "Hello, my name is Bernie. I am staying with you.",
              spanish: "Llegar y conectar con calidez: 'Hello, my name is Bernie. I am staying with you.'"
            },
            {
              clue: "Silent 'L' & Lip-Bite /v/: Say slowly and warmly: 'Listen to my voice. Please stay calm. You are safe.'",
              answer: "Watch silent L in CALM (/kɑːm/, not 'cal-m'!) and lip-bite /v/ in VOICE.",
              spanish: "Voz lenta y cálida: la L de 'calm' es muda, y mordé suavemente el labio inferior en 'voice'."
            },
            {
              clue: "Someone is breathing very fast in panic. Guide their breathing in 2 simple sentences!",
              answer: "Breathe slowly with me. In... and out.",
              spanish: "Guiar la respiración: 'Breathe slowly with me. In... and out.'"
            },
            {
              clue: "Use your 5-sense grounding technique! Ask a person in shock to notice 3 things around them.",
              answer: "Look around. Tell me three things you can see. Feel your feet on the floor.",
              spanish: "Anclaje sensorial (grounding): 'Look around. Tell me three things you can see.'"
            },
            {
              clue: "Full Arrival Sequence: Deliver all 4 steps in a calm voice: Introduce yourself → Eye contact → Reassure safety → Breathing.",
              answer: "Hello, my name is Bernie. Look at me. You are safe right now. Breathe slowly with me—in, and out.",
              spanish: "Secuencia completa de llegada en 4 pasos: nombre, contacto visual ('Look at me'), seguridad y respiración."
            }
          ]
        },
        {
          title: "2. Say This, Not That ❤️",
          clues: [
            {
              clue: "Instead of ❌ 'Calm down! Stop crying!', what warm phrase should you say?",
              answer: "I am here with you. Take your time. It is okay to cry.",
              spanish: "No juzgar el llanto: 'I am here with you. Take your time. It is okay to cry.'"
            },
            {
              clue: "Instead of ❌ 'Don't worry, everything will be fine!' (which can sound untrue), what should you say?",
              answer: "You are safe right now. We will take this step by step.",
              spanish: "Sin falsas promesas: 'You are safe right now. We will take this step by step.'"
            },
            {
              clue: "Instead of ❌ 'Tell me every detail of what happened!', what should you say?",
              answer: "You don't have to talk right now. What do you need?",
              spanish: "No forzar a revivir el trauma: 'You don't have to talk right now. What do you need?'"
            },
            {
              clue: "Give a Small Structured Task: A survivor is frozen in shock. Give them one simple physical task!",
              answer: "Hold this water with both hands. / Can you help me? Please sit here and write your name.",
              spanish: "Dar una tarea simple y concreta: 'Hold this water with both hands' o 'Please sit here and write your name.'"
            },
            {
              clue: "Angry Relative: Someone shouts 'Let me go inside! Nobody is helping me!' Validate their feelings AND set a safe boundary!",
              answer: "I hear you. I know you are scared. It is not safe inside—please walk with me and help me check the list.",
              spanish: "Validar + poner límite firme y amable + redirigir a una tarea."
            }
          ]
        },
        {
          title: "3. Polish My English 🔧",
          clues: [
            {
              clue: "Polish this line from our transcript: ❌ 'Look my eyes.' → What one little word is missing?",
              answer: "Look AT my eyes! (Always use 'at' after 'look'.)",
              spanish: "Siempre va 'AT' después de 'look': 'Look AT my eyes' / 'Look AT me'."
            },
            {
              clue: "Polish this line: ❌ 'They loosing control, this is very dangerous.'",
              answer: "They ARE losing control. That is very dangerous. (Don't drop 'are'!)",
              spanish: "No te olvides del verbo 'are': 'They ARE losing control.'"
            },
            {
              clue: "Polish this question: ❌ 'Where you stay now?'",
              answer: "Where ARE you right now? (Put 'are' before 'you' in questions!)",
              spanish: "En preguntas, poné 'are' antes de 'you': 'Where ARE you right now?'"
            },
            {
              clue: "Polish this warm phrase: ❌ 'I am with you for your company.'",
              answer: "I am here to KEEP you company.",
              spanish: "Expresión natural en inglés: 'to keep someone company' (hacerle compañía a alguien)."
            },
            {
              clue: "Polish this PFA explanation: ❌ 'Help them proceed to brain trauma.'",
              answer: "Help them PROCESS the shock to PREVENT trauma.",
              spanish: "Process = procesar el shock • Prevent = prevenir el trauma (no 'proceed')."
            }
          ]
        },
        {
          title: "4. Odd One Out (El Intruso) 🎯",
          clues: [
            {
              clue: "Find the Odd One Out AND explain why in English: 1) Hydraulic spreaders  2) Rotary rescue saw  3) Timber shoring  4) Tea towel.",
              answer: "TEA TOWEL is the odd one out. The other three are heavy rescue tools for collapsed buildings, but a tea towel is for the kitchen.",
              spanish: "Decí cuál es el intruso y explicá por qué en inglés: 'Tea towel is the odd one out because...'"
            },
            {
              clue: "Find the Odd One Out AND explain why: 1) Critical (Red)  2) Delayed (Yellow)  3) Impassable  4) Walking wounded (Green).",
              answer: "IMPASSABLE is the odd one out. Red, Yellow, and Green are triage categories for patients, but impassable describes a road.",
              spanish: "Impassable describe un camino bloqueado; los otros tres son categorías de triaje médico."
            },
            {
              clue: "Find the Odd One Out AND explain why: 1) Confirmed gas leak  2) Live power lines  3) Secondary collapse risk  4) Safe zone.",
              answer: "SAFE ZONE is the odd one out. The other three are dangerous hazards, but a safe zone is where people are protected.",
              spanish: "Safe zone es un lugar seguro; los otros tres son peligros en la zona de impacto."
            },
            {
              clue: "Find the Odd One Out AND explain why: 1) Acoustic listening device  2) K9 search dog  3) Snake camera  4) Spine board.",
              answer: "SPINE BOARD is the odd one out. Dogs, cameras, and acoustic devices are used to find victims, but a spine board is for medical transport.",
              spanish: "Spine board (tabla espinal) es para traslado médico; los otros tres son para buscar víctimas."
            },
            {
              clue: "Find the Odd One Out AND explain why: 1) Step back!  2) Keep clear!  3) Unconscious  4) Clear the area immediately!",
              answer: "UNCONSCIOUS is the odd one out. The other three are urgent crowd commands, but unconscious describes a patient's medical state.",
              spanish: "Unconscious es un estado médico; los otros tres son comandos de voz para la multitud."
            }
          ]
        },
        {
          title: "5. Prepositions & Fluency 📻",
          clues: [
            {
              clue: "Ground-Zero Prepositions: 'The survivor is ___ the concrete beam, and the triage tags are ___ the top pocket of my vest.'",
              answer: "UNDER the concrete beam, and IN the top pocket of my vest.",
              spanish: "Under (debajo de) la viga • In (adentro de) el bolsillo superior."
            },
            {
              clue: "Setup Prepositions: 'We set up the snake camera ___ the two walls, and the generator is ___ the back of the truck.'",
              answer: "BETWEEN the two walls, and ON the back of the truck.",
              spanish: "Between (entre) las dos paredes • On (sobre/arriba de) la caja de la camioneta."
            },
            {
              clue: "Ping-Pong Quick-Fire! You hear a loud creaking sound inside a cracked building. What 2-word command do you shout?",
              answer: "Evacuate now! / Step back! / Get out!",
              spanish: "¡Respuesta rápida en menos de 5 segundos!"
            },
            {
              clue: "Ping-Pong Quick-Fire! You see someone smoking a cigarette near a fuel tanker. What do you say?",
              answer: "Put that out immediately! This area is flammable!",
              spanish: "Apagá eso ya: 'Put that out immediately!'"
            },
            {
              clue: "30-Second Fluency Check: Explain in simple English why short, calm sentences work better than long medical words in Psychological First Aid!",
              answer: "Open-ended fluency check! Key idea: Shocked people cannot process long sentences; short, warm phrases help them feel safe and grounded.",
              spanish: "Explicá en 30 segundos por qué las frases cortas y cálidas funcionan mejor que las palabras técnicas en una crisis."
            }
          ]
        }
      ],
      final: {
        category: "CRISIS ROLEPLAY: PFA BOUNDARY 🤝",
        clue: "A worried father is trying to run past the safety line into an unstable building, shouting: 'Let me go inside! My daughter is in there!' Deliver a 3-step PFA response: 1) Validate his feelings, 2) Set a firm safe boundary, 3) Give him a small structured task.",
        answer: "Example: 'I hear you, and I know you are scared. Look at me—it is not safe inside because of secondary collapse. Please stay here with me and help me check this list so I can bring you news.'",
        spanish: "Roleplay final en 3 pasos: 1) Validar ('I hear you...'), 2) Límite seguro ('It is not safe inside'), 3) Tarea simple ('Help me check this list / hold this water')."
      }
    },

    bernie_fun: {
      name: "Bernie's Chill & Fun Night 🇦🇷✨ (Food, Travel & Would You Rather)",
      categories: [
        {
          title: "1. Argentina & Home 🇦🇷",
          clues: [
            {
              clue: "Explain MATE to someone from another country in 2 simple English sentences!",
              answer: "Mate is a traditional Argentine hot herbal tea. We drink it through a metal straw and share it with family and friends!",
              spanish: "Explicá qué es el mate en 2 oraciones simples en inglés (ej. 'traditional hot tea', 'metal straw', 'share with friends')."
            },
            {
              clue: "Describe a classic Sunday ASADO in 2–3 sentences: Who is there, and what do you eat?",
              answer: "On Sunday, my family gets together for an asado. We grill meat, eat salad and bread, and talk for hours!",
              spanish: "Contá cómo es un asado de domingo con tu familia en 2 o 3 oraciones."
            },
            {
              clue: "You are visiting your dad ('papa') on a holiday weekend. Say 2 things you like to do together!",
              answer: "When I visit my dad, we drink mate, eat good food, and relax together!",
              spanish: "Contá 2 cosas que te gusta hacer cuando visitás a tu papá."
            },
            {
              clue: "Tour Guide Bernie! Recommend 2 places or things to try in Buenos Aires!",
              answer: "If you visit Buenos Aires, you should walk in the parks, eat empanadas or ice cream, and see the architecture!",
              spanish: "¡Hacé de guía turística! Recomendá 2 lugares o comidas de Buenos Aires usando 'you should...'."
            },
            {
              clue: "30-Second Mini-Pitch: Convince Louie to visit Argentina! Give 3 reasons using 'you should' and 'you would love'.",
              answer: "You should visit Argentina! You would love the food, the mountains in Patagonia, and the warm, friendly people.",
              spanish: "Convenzamos a Louie de visitar Argentina en 30 segundos: comida, paisajes y gente."
            }
          ]
        },
        {
          title: "2. Cozy Food & Kitchen 🍲",
          clues: [
            {
              clue: "When you are tired or sick, what is the best comfort food? (Hint: Grandma's recipe!)",
              answer: "Grandma's chicken soup! With bread, fruit, and vegetables—it is the best.",
              spanish: "¡La sopa de pollo de la abuela! ('Grandma's chicken soup is the best!')"
            },
            {
              clue: "Unpacking Game Flashback! Put the kitchen item in the right place: 'The frying pan is ___ the stove, and the cleaning spray is ___ the sink.'",
              answer: "The frying pan is ON the stove, and the cleaning spray is UNDER the sink.",
              spanish: "Preposiciones de cocina del juego Unpacking: ON the stove (sobre la hornalla) • UNDER the sink (bajo la pileta)."
            },
            {
              clue: "What is the difference between a TEA TOWEL and a FRYING PAN?",
              answer: "A tea towel is a cloth for drying dishes; a frying pan is for cooking food on the stove!",
              spanish: "Tea towel = repasador para secar • Frying pan = sartén para cocinar."
            },
            {
              clue: "Sweet Tooth! Describe your favorite dessert or snack in English without saying its name—can Louie guess it?",
              answer: "Open-ended guessing game! (e.g., dulce de leche, alfajor, helado, medialunas...)",
              spanish: "Describí tu postre o snack favorito en inglés sin decir el nombre para que Louie adivine."
            },
            {
              clue: "If you could cook or order ANY dinner tonight for free, what would you choose and why?",
              answer: "I would order / cook... because it is delicious and comforting!",
              spanish: "Si pudieras pedir o cocinar cualquier cena hoy gratis, ¿qué elegirías? Usá 'I would...'."
            }
          ]
        },
        {
          title: "3. Movies: Comedy, Love & Classics 🎬",
          clues: [
            {
              clue: "Comedy Classic! In 'Home Alone' (Mi Pobre Angelito), an 8-year-old boy is left behind at Christmas. What is his name, or what does he do to the burglars?",
              answer: "Kevin McCallister! He sets funny traps around the house to stop the two burglars.",
              spanish: "Comedia clásica: ¿Cómo se llama el nene de 'Mi Pobre Angelito' o qué les hace a los ladrones?"
            },
            {
              clue: "Love & Rom-Com! In 'Notting Hill' (with Julia Roberts and Hugh Grant), a famous movie star falls in love with a shy man who owns what kind of shop in London?",
              answer: "A travel bookshop! (Bonus: Name one romantic comedy you love!)",
              spanish: "Comedia romántica: ¿Qué tipo de tienda tiene el personaje de Hugh Grant en 'Notting Hill'?"
            },
            {
              clue: "Timeless Classic! Think of 'Titanic' or 'The Sound of Music' (La Novicia Rebelde). Describe one famous scene in 2 simple English sentences!",
              answer: "e.g., 'In Titanic, Jack and Rose stand at the front of the ship. Later, the ship hits an iceberg.'",
              spanish: "Clásico del cine: describí una escena famosa de 'Titanic' o 'La Novicia Rebelde' en 2 oraciones simples."
            },
            {
              clue: "Comedy & Love! Tell us about a funny or romantic movie you love (like 'Pretty Woman' or '10 Things I Hate About You'): Who are the characters, and why do you like it?",
              answer: "Open-ended fluency check! Describe the characters and why the movie is funny or sweet.",
              spanish: "Contá sobre una comedia o película romántica que te guste: personajes y por qué te gusta."
            },
            {
              clue: "Movie Critic Challenge (30s)! Pick ONE classic movie, comedy, or love story—describe the plot WITHOUT saying the title, and see if Louie can guess it!",
              answer: "Open-ended guessing game! Use: 'It is a comedy / love story / classic about...', 'The main character...', 'It is famous because...'",
              spanish: "¡Desafío de 30 segundos! Elegí una comedia, historia de amor o clásico, contá de qué trata SIN decir el título y que Louie adivine."
            }
          ]
        },
        {
          title: "4. Would You Rather? 🤔",
          clues: [
            {
              clue: "Would you rather drink MATE at 6:00 AM or COFFEE at midnight? Why?",
              answer: "I would rather drink... because... (Watch silent 'L' in WOULD!)",
              spanish: "¿Qué preferirías: tomar mate a las 6 AM o café a medianoche? Empezá con 'I would rather...'."
            },
            {
              clue: "Would you rather spend a week in the PATAGONIA mountains or on a TROPICAL beach?",
              answer: "I would rather go to... because I love...",
              spanish: "¿Montañas de la Patagonia o playa tropical? Explicá por qué en inglés."
            },
            {
              clue: "If you had a superpower, would you rather SPEAK EVERY LANGUAGE or NEVER NEED SLEEP?",
              answer: "I would rather... because...",
              spanish: "¿Hablar todos los idiomas del mundo o no necesitar dormir nunca?"
            },
            {
              clue: "Would you rather only eat SWEET food for a month or only SALTY food for a month?",
              answer: "I would rather eat sweet / salty food because...",
              spanish: "¿Solo comida dulce o solo comida salada durante un mes?"
            },
            {
              clue: "Lottery Day! If you won a free 1-week vacation tomorrow, where would you go and who would you take?",
              answer: "If I won a free vacation, I would go to... with...",
              spanish: "Si ganaras un viaje gratis de una semana mañana, ¿adónde irías y con quién?"
            }
          ]
        },
        {
          title: "5. Fun Sound & Wordplay 🎯",
          clues: [
            {
              clue: "Fun Odd One Out: 1) Mate  2) Coffee  3) Chicken soup  4) Rotary saw. Which one doesn't belong and why?",
              answer: "ROTARY SAW is the odd one out! The other three are warm drinks or food, not heavy rescue tools!",
              spanish: "¿Cuál es el intruso y por qué? (¡Al fin uno divertido!)"
            },
            {
              clue: "Tongue Twister (Ghost E check!): Say 3 times cleanly: 'Six small spoons sitting on the stove!'",
              answer: "ssss-ix ssss-mall ssss-poons ssss-itting on the ssss-tove! (Zero 'e-' before 's'!)",
              spanish: "Trabalenguas sin 'E' fantasma: 'Six small spoons sitting on the stove!'"
            },
            {
              clue: "Silent 'L' Tongue Twister: Say cleanly: 'Calm cooks would make good soup.'",
              answer: "KAAM cooks WUD make GUD soup! (Silent L in calm and would!)",
              spanish: "Trabalenguas con L muda: 'Calm' (KAAM) y 'would' (WUD)."
            },
            {
              clue: "Lip-Bite /v/ Fun! Say clearly: 'Very vivid vacations in vibrant valleys!'",
              answer: "Top teeth on bottom lip for every V: Very, Vivid, Vacations, Vibrant, Valleys!",
              spanish: "Mordé suavemente el labio inferior en todas las V: Very vivid vacations in vibrant valleys!"
            },
            {
              clue: "30-Second Fun Story! Describe the best meal or celebration you had this year!",
              answer: "Open-ended 30-second fluency story—focus on flow, smiles, and full sentences!",
              spanish: "Contá en 30 segundos la mejor comida o festejo que tuviste este año."
            }
          ]
        }
      ],
      final: {
        category: "THE PERFECT SUNDAY IN BUENOS AIRES 🇦🇷☀️",
        clue: "Describe your ideal, stress-free Sunday from morning to night in 4+ English sentences (include: morning drink, food, family/friends, and one relaxing activity)!",
        answer: "Example: 'On my ideal Sunday, I would wake up slowly and drink mate. Then I would visit my family for a big asado or grandma's chicken soup. In the afternoon, I would walk in the park or play a cozy game, and at night I would watch a good movie!'",
        spanish: "Desafío final relajado: describí tu domingo perfecto en Buenos Aires de la mañana a la noche en 4+ oraciones (usando 'I would...')."
      }
    }
  };

  // Default player 1 names per student preset
  const DEFAULT_PLAYER_BY_DECK = {
    weijing: "Wei Jing ✨",
    vinh: "Vinh 🇻🇳",
    giulia: "Giulia 🇮🇹",
    giulia_chill: "Giulia 🇮🇹",
    abdi: "Abdi 🇪🇹",
    bernie_ops: "Bernie 🇦🇷",
    bernie_pfa: "Bernie 🇦🇷",
    bernie_fun: "Bernie 🇦🇷",
    dominika: "Dominika 🇨🇿",
    worachon: "Worachon 🇹🇭",
    clemens: "Clemens 🇩🇪",
    hania: "Hania 🇵🇱",
    jack: "Jack",
    gabriele: "Gabriele 🇮🇹"
  };

  // State
  let state = {
    deckKey: "weijing",
    deck: structuredClone(PRESET_DECKS.weijing),
    usedTiles: {}, // "col-row": true
    dailyDoubleKey: "4-3",
    players: [
      { name: "Wei Jing ✨", score: 0 },
      { name: "Lewis 🇬🇧", score: 0 }
    ],
    activePlayerIdx: 0,
    timerSeconds: 45,
    soundEnabled: true,
    musicEnabled: true
  };

  let activeTile = null; // { col, row, value, isDailyDouble, wager }
  let timerInterval = null;
  let audioCtx = null;
  let musicInterval = null;

  // DOM Elements
  const $ = (id) => document.getElementById(id);
  const presetSelect = $("presetSelect");
  const timerSelect = $("timerSelect");
  const soundToggleBtn = $("soundToggleBtn");
  const musicToggleBtn = $("musicToggleBtn");
  const scoreboardEl = $("scoreboard");
  const boardEl = $("jeopardyBoard");

  // Clue Modal
  const clueModal = $("clueModal");
  const modalCategory = $("modalCategory");
  const modalValue = $("modalValue");
  const dailyDoubleBadge = $("dailyDoubleBadge");
  const modalTimer = $("modalTimer");
  const wagerView = $("wagerView");
  const wagerPlayerSelect = $("wagerPlayerSelect");
  const wagerInput = $("wagerInput");
  const clueView = $("clueView");
  const clueText = $("clueText");
  const answerBox = $("answerBox");
  const answerText = $("answerText");
  const modalFooter = $("modalFooter");
  const revealAnswerBtn = $("revealAnswerBtn");
  const awardRow = $("awardRow");

  // Final Modal
  const finalModal = $("finalModal");
  const finalCategoryBadge = $("finalCategoryBadge");
  const finalWagerStage = $("finalWagerStage");
  const finalWagersList = $("finalWagersList");
  const finalClueStage = $("finalClueStage");
  const finalClueText = $("finalClueText");
  const finalAnswerBox = $("finalAnswerBox");
  const finalAnswerText = $("finalAnswerText");
  const finalResolveList = $("finalResolveList");

  // Editor Modal
  const editorModal = $("editorModal");
  const playerCountInput = $("playerCountInput");
  const playerNamesInputs = $("playerNamesInputs");
  const editorGrid = $("editorGrid");
  const editFinalCat = $("editFinalCat");
  const editFinalClue = $("editFinalClue");
  const editFinalAnswer = $("editFinalAnswer");

  // Sound Effects & Thinking Music via HTML5 <audio> + PCM WAV Generator
  function buildWavUrl(notes, waveType = "triangle", volume = 0.5) {
    const sampleRate = 22050;
    const totalSamples = notes.reduce((sum, n) => sum + Math.floor(n.dur * sampleRate), 0);
    const buffer = new ArrayBuffer(44 + totalSamples * 2);
    const view = new DataView(buffer);

    const writeStr = (offset, str) => {
      for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
    };

    writeStr(0, "RIFF");
    view.setUint32(4, 36 + totalSamples * 2, true);
    writeStr(8, "WAVE");
    writeStr(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeStr(36, "data");
    view.setUint32(40, totalSamples * 2, true);

    let offset = 44;
    for (const note of notes) {
      const len = Math.floor(note.dur * sampleRate);
      for (let i = 0; i < len; i++) {
        let sample = 0;
        if (note.freq > 0) {
          const t = i / sampleRate;
          const phase = (t * note.freq) % 1;
          if (waveType === "square") {
            sample = phase < 0.5 ? 1 : -1;
          } else if (waveType === "sawtooth") {
            sample = 2 * phase - 1;
          } else if (waveType === "triangle") {
            sample = 1 - 4 * Math.abs(phase - 0.5);
          } else {
            sample = Math.sin(2 * Math.PI * note.freq * t);
          }
          // Smooth attack & decay envelope
          const env = Math.min(1, i / 120) * Math.max(0, 1 - i / len);
          sample *= env * volume;
        }
        view.setInt16(offset, Math.max(-1, Math.min(1, sample)) * 32767, true);
        offset += 2;
      }
    }

    return URL.createObjectURL(new Blob([buffer], { type: "audio/wav" }));
  }

  const AUDIO_URLS = {
    open: buildWavUrl([{ freq: 523.25, dur: 0.14 }], "triangle", 0.55),
    dailyDouble: buildWavUrl(
      [
        { freq: 440, dur: 0.12 },
        { freq: 554.37, dur: 0.12 },
        { freq: 659.25, dur: 0.28 }
      ],
      "square",
      0.45
    ),
    correct: buildWavUrl(
      [
        { freq: 523.25, dur: 0.12 },
        { freq: 783.99, dur: 0.25 }
      ],
      "triangle",
      0.6
    ),
    wrong: buildWavUrl([{ freq: 185, dur: 0.32 }], "sawtooth", 0.45),
    timeUp: buildWavUrl(
      [
        { freq: 330, dur: 0.16 },
        { freq: 0, dur: 0.04 },
        { freq: 247, dur: 0.34 }
      ],
      "sawtooth",
      0.5
    ),
    dot: buildWavUrl([{ freq: 660, dur: 0.08 }], "triangle", 0.45),
    think: buildWavUrl(
      [
        { freq: 392.0, dur: 0.3 }, { freq: 523.25, dur: 0.3 }, { freq: 392.0, dur: 0.3 }, { freq: 329.63, dur: 0.3 },
        { freq: 392.0, dur: 0.3 }, { freq: 523.25, dur: 0.3 }, { freq: 392.0, dur: 0.3 }, { freq: 0, dur: 0.3 },
        { freq: 392.0, dur: 0.3 }, { freq: 523.25, dur: 0.3 }, { freq: 392.0, dur: 0.3 }, { freq: 523.25, dur: 0.3 },
        { freq: 587.33, dur: 0.3 }, { freq: 523.25, dur: 0.3 }, { freq: 493.88, dur: 0.3 }, { freq: 440.0, dur: 0.3 }
      ],
      "triangle",
      0.38
    )
  };

  const thinkAudio = new Audio(AUDIO_URLS.think);
  thinkAudio.loop = true;

  function playSound(key) {
    if (!state.soundEnabled) return;
    const url = AUDIO_URLS[key];
    if (!url) return;
    try {
      const a = new Audio(url);
      a.play().catch(() => {});
    } catch (_) {}
  }

  function playTone() {
    playSound("dot");
  }

  function stopThinkMusic() {
    try {
      thinkAudio.pause();
      thinkAudio.currentTime = 0;
    } catch (_) {}
  }

  function startThinkMusic() {
    stopThinkMusic();
    if (!state.musicEnabled) return;
    try {
      thinkAudio.currentTime = 0;
      thinkAudio.play().catch(() => {});
    } catch (_) {}
  }

  const sfx = {
    open: () => playSound("open"),
    dailyDouble: () => playSound("dailyDouble"),
    correct: () => playSound("correct"),
    wrong: () => playSound("wrong"),
    timeUp: () => playSound("timeUp")
  };

  function pickDailyDouble() {
    const numCols = state.deck?.categories?.length || 5;
    const col = Math.floor(Math.random() * numCols);
    const row = Math.floor(Math.random() * 3) + 1; // rows 1..3 ($200-$400)
    state.dailyDoubleKey = `${col}-${row}`;
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        pickDailyDouble();
        return;
      }
      const parsed = JSON.parse(raw);
      if (parsed && parsed.deck && Array.isArray(parsed.deck.categories)) {
        state = { ...state, ...parsed };
      }
    } catch (_) {
      pickDailyDouble();
    }
  }

  function populatePresetSelect() {
    presetSelect.innerHTML = "";
    Object.entries(PRESET_DECKS).forEach(([key, deck]) => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = deck.name;
      presetSelect.appendChild(opt);
    });
    const customOpt = document.createElement("option");
    customOpt.value = "custom";
    customOpt.textContent = "Custom Board";
    presetSelect.appendChild(customOpt);
    presetSelect.value = state.deckKey;
  }

  function renderScoreboard() {
    scoreboardEl.innerHTML = "";
    state.players.forEach((player, idx) => {
      const card = document.createElement("div");
      card.className = `player-card${idx === state.activePlayerIdx ? " active-turn" : ""}`;
      card.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
        state.activePlayerIdx = idx;
        saveState();
        renderScoreboard();
      });

      const info = document.createElement("div");
      info.className = "player-info";
      const nameEl = document.createElement("div");
      nameEl.className = "player-name";
      nameEl.textContent = player.name;

      const scoreEl = document.createElement("div");
      scoreEl.className = `player-score${player.score < 0 ? " negative" : ""}`;
      scoreEl.textContent = `${player.score < 0 ? "-" : ""}$${Math.abs(player.score)}`;

      info.append(nameEl, scoreEl);

      const nudge = document.createElement("div");
      nudge.className = "player-nudge";
      const plusBtn = document.createElement("button");
      plusBtn.type = "button";
      plusBtn.className = "nudge-btn";
      plusBtn.textContent = "+100";
      plusBtn.onclick = () => {
        player.score += 100;
        saveState();
        renderScoreboard();
      };

      const minusBtn = document.createElement("button");
      minusBtn.type = "button";
      minusBtn.className = "nudge-btn";
      minusBtn.textContent = "-100";
      minusBtn.onclick = () => {
        player.score -= 100;
        saveState();
        renderScoreboard();
      };

      nudge.append(plusBtn, minusBtn);
      card.append(info, nudge);
      scoreboardEl.appendChild(card);
    });
  }

  function renderBoard() {
    boardEl.innerHTML = "";
    const numCols = state.deck.categories.length;
    boardEl.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;

    // Category Headers
    state.deck.categories.forEach((cat) => {
      const header = document.createElement("div");
      header.className = "cat-header";
      header.textContent = cat.title;
      boardEl.appendChild(header);
    });

    // Clue Tiles (5 rows x N cols)
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < numCols; col++) {
        const key = `${col}-${row}`;
        const used = Boolean(state.usedTiles[key]);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `clue-tile${used ? " used" : ""}`;
        btn.disabled = used;
        btn.textContent = `$${VALUES[row]}`;
        btn.addEventListener("click", () => openTile(col, row));
        boardEl.appendChild(btn);
      }
    }
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    stopThinkMusic();
  }

  function startTimer() {
    stopTimer();
    const secs = Number(state.timerSeconds);
    if (!secs) {
      modalTimer.classList.add("hidden");
      return;
    }
    let remaining = secs;
    modalTimer.classList.remove("hidden", "danger");
    modalTimer.textContent = remaining;
    startThinkMusic();

    timerInterval = setInterval(() => {
      remaining -= 1;
      modalTimer.textContent = remaining;
      if (remaining <= 5 && remaining > 0) {
        modalTimer.classList.add("danger");
      }
      if (remaining <= 0) {
        stopTimer();
        modalTimer.textContent = "TIME";
        sfx.timeUp();
      }
    }, 1000);
  }

  function renderAwardButtons() {
    awardRow.innerHTML = "";
    const pts = activeTile.wager ?? activeTile.value;

    state.players.forEach((player, idx) => {
      const group = document.createElement("div");
      group.className = "award-group";

      const label = document.createElement("span");
      label.className = "award-player-label";
      label.textContent = player.name;

      const winBtn = document.createElement("button");
      winBtn.type = "button";
      winBtn.className = "btn btn-green";
      winBtn.textContent = `+$${pts}`;
      winBtn.onclick = () => {
        sfx.correct();
        player.score += pts;
        state.activePlayerIdx = idx;
        finishTile();
      };

      const loseBtn = document.createElement("button");
      loseBtn.type = "button";
      loseBtn.className = "btn btn-red";
      loseBtn.textContent = `-$${pts}`;
      loseBtn.onclick = () => {
        sfx.wrong();
        player.score -= pts;
        saveState();
        renderScoreboard();
      };

      group.append(label, winBtn, loseBtn);
      awardRow.appendChild(group);
    });

    const passBtn = document.createElement("button");
    passBtn.type = "button";
    passBtn.className = "btn btn-ghost";
    passBtn.textContent = "Pass / No Points";
    passBtn.onclick = finishTile;
    awardRow.appendChild(passBtn);
  }

  function openTile(col, row) {
    const key = `${col}-${row}`;
    const cat = state.deck.categories[col];
    const item = cat.clues[row];
    const value = VALUES[row];
    const isDD = key === state.dailyDoubleKey;

    activeTile = { col, row, key, value, isDailyDouble: isDD, wager: null, item };

    modalCategory.textContent = cat.title;
    modalValue.textContent = `$${value}`;
    clueText.textContent = item.clue;
    answerText.textContent = item.answer;
    answerBox.classList.add("hidden");
    $("clueTranslateBox").classList.add("hidden");
    revealAnswerBtn.classList.remove("hidden");

    if (isDD) {
      sfx.dailyDouble();
      dailyDoubleBadge.classList.remove("hidden");
      wagerView.classList.remove("hidden");
      clueView.classList.add("hidden");
      modalFooter.classList.add("hidden");
      modalTimer.classList.add("hidden");

      wagerPlayerSelect.innerHTML = "";
      state.players.forEach((p, idx) => {
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = `${p.name} ($${p.score})`;
        wagerPlayerSelect.appendChild(opt);
      });
      wagerPlayerSelect.value = String(state.activePlayerIdx);
      wagerInput.value = String(Math.max(value, 400));
    } else {
      sfx.open();
      dailyDoubleBadge.classList.add("hidden");
      wagerView.classList.add("hidden");
      clueView.classList.remove("hidden");
      modalFooter.classList.remove("hidden");
      renderAwardButtons();
      startTimer();
    }

    clueModal.classList.remove("hidden");
  }

  function lockDailyDoubleWager() {
    const idx = Number(wagerPlayerSelect.value);
    const wager = Math.max(50, Number(wagerInput.value) || activeTile.value);
    state.activePlayerIdx = idx;
    activeTile.wager = wager;
    modalValue.textContent = `$${wager} WAGER`;

    wagerView.classList.add("hidden");
    clueView.classList.remove("hidden");
    modalFooter.classList.remove("hidden");
    renderAwardButtons();
    renderScoreboard();
    startTimer();
  }

  function finishTile() {
    if (activeTile) {
      state.usedTiles[activeTile.key] = true;
    }
    closeClueModal();
    saveState();
    renderScoreboard();
    renderBoard();
  }

  function closeClueModal() {
    stopTimer();
    clueModal.classList.add("hidden");
    activeTile = null;
  }

  // Final Jeopardy
  function openFinalJeopardy() {
    const finalData = state.deck.final || PRESET_DECKS.conversation.final;
    finalCategoryBadge.textContent = finalData.category;
    finalClueText.textContent = finalData.clue;
    finalAnswerText.textContent = finalData.answer;

    finalWagerStage.classList.remove("hidden");
    finalClueStage.classList.add("hidden");
    finalAnswerBox.classList.add("hidden");
    $("finalTranslateBox").classList.add("hidden");
    finalResolveList.classList.add("hidden");

    finalWagersList.innerHTML = "";
    state.players.forEach((p, idx) => {
      const row = document.createElement("div");
      row.className = "final-player-row";
      row.innerHTML = `
        <strong>${p.name} (Score: $${p.score})</strong>
        <label>Wager: <input type="number" class="final-wager-input" data-idx="${idx}" min="0" step="50" value="${Math.max(0, Math.min(500, p.score))}" /></label>
      `;
      finalWagersList.appendChild(row);
    });

    finalModal.classList.remove("hidden");
  }

  function revealFinalClue() {
    sfx.open();
    const wagers = [...document.querySelectorAll(".final-wager-input")].map((el) =>
      Math.max(0, Number(el.value) || 0)
    );

    finalWagerStage.classList.add("hidden");
    finalClueStage.classList.remove("hidden");

    finalResolveList.innerHTML = "";
    state.players.forEach((p, idx) => {
      const wager = wagers[idx] || 0;
      const box = document.createElement("div");
      box.className = "final-player-row";
      box.innerHTML = `<strong>${p.name} (Wager: $${wager})</strong>`;

      const btns = document.createElement("div");
      btns.style.display = "flex";
      btns.style.gap = "6px";

      const okBtn = document.createElement("button");
      okBtn.type = "button";
      okBtn.className = "btn btn-green";
      okBtn.textContent = `+$${wager}`;
      okBtn.onclick = () => {
        sfx.correct();
        p.score += wager;
        okBtn.disabled = true;
        badBtn.disabled = true;
        saveState();
        renderScoreboard();
      };

      const badBtn = document.createElement("button");
      badBtn.type = "button";
      badBtn.className = "btn btn-red";
      badBtn.textContent = `-$${wager}`;
      badBtn.onclick = () => {
        sfx.wrong();
        p.score -= wager;
        okBtn.disabled = true;
        badBtn.disabled = true;
        saveState();
        renderScoreboard();
      };

      btns.append(okBtn, badBtn);
      box.appendChild(btns);
      finalResolveList.appendChild(box);
    });
  }

  // Board Editor
  function renderPlayerNameInputs() {
    const count = Math.min(4, Math.max(1, Number(playerCountInput.value) || 2));
    playerCountInput.value = String(count);
    playerNamesInputs.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const inp = document.createElement("input");
      inp.type = "text";
      inp.value = state.players[i]?.name || `Player ${i + 1}`;
      inp.placeholder = `Player ${i + 1}`;
      inp.dataset.pidx = String(i);
      playerNamesInputs.appendChild(inp);
    }
  }

  function openEditor() {
    playerCountInput.value = String(state.players.length);
    renderPlayerNameInputs();

    editorGrid.innerHTML = "";
    state.deck.categories.forEach((cat, col) => {
      const colEl = document.createElement("div");
      colEl.className = "editor-col";

      const catInp = document.createElement("input");
      catInp.type = "text";
      catInp.className = "editor-cat-input";
      catInp.value = cat.title;
      catInp.dataset.col = String(col);
      colEl.appendChild(catInp);

      cat.clues.forEach((item, row) => {
        const cell = document.createElement("div");
        cell.className = "editor-cell";
        cell.innerHTML = `<span class="editor-cell-val">$${VALUES[row]}</span>`;

        const clueArea = document.createElement("textarea");
        clueArea.value = item.clue;
        clueArea.placeholder = "Clue / Prompt";
        clueArea.dataset.col = String(col);
        clueArea.dataset.row = String(row);
        clueArea.dataset.field = "clue";

        const ansArea = document.createElement("textarea");
        ansArea.value = item.answer;
        ansArea.placeholder = "Answer";
        ansArea.dataset.col = String(col);
        ansArea.dataset.row = String(row);
        ansArea.dataset.field = "answer";

        cell.append(clueArea, ansArea);
        colEl.appendChild(cell);
      });

      editorGrid.appendChild(colEl);
    });

    const finalData = state.deck.final || PRESET_DECKS.conversation.final;
    editFinalCat.value = finalData.category;
    editFinalClue.value = finalData.clue;
    editFinalAnswer.value = finalData.answer;

    editorModal.classList.remove("hidden");
  }

  function saveEditorChanges() {
    const newPlayers = [...playerNamesInputs.querySelectorAll("input")].map((inp, i) => ({
      name: inp.value.trim() || `Player ${i + 1}`,
      score: state.players[i]?.score ?? 0
    }));
    state.players = newPlayers;
    if (state.activePlayerIdx >= state.players.length) state.activePlayerIdx = 0;

    editorGrid.querySelectorAll(".editor-cat-input").forEach((inp) => {
      const col = Number(inp.dataset.col);
      state.deck.categories[col].title = inp.value.trim() || `Category ${col + 1}`;
    });

    editorGrid.querySelectorAll("textarea").forEach((ta) => {
      const col = Number(ta.dataset.col);
      const row = Number(ta.dataset.row);
      const field = ta.dataset.field;
      state.deck.categories[col].clues[row][field] = ta.value.trim();
    });

    state.deck.final = {
      category: editFinalCat.value.trim() || "FINAL JEOPARDY",
      clue: editFinalClue.value.trim() || "Bonus speaking challenge!",
      answer: editFinalAnswer.value.trim() || "Open-ended"
    };

    state.deckKey = "custom";
    presetSelect.value = "custom";
    saveState();
    renderScoreboard();
    renderBoard();
    editorModal.classList.add("hidden");
  }

  // Event Listeners
  presetSelect.addEventListener("change", () => {
    const key = presetSelect.value;
    if (key === "custom") return;
    state.deckKey = key;
    state.deck = structuredClone(PRESET_DECKS[key]);
    state.usedTiles = {};
    if (DEFAULT_PLAYER_BY_DECK[key] && state.players.length >= 1) {
      state.players[0].name = DEFAULT_PLAYER_BY_DECK[key];
      state.players.forEach((p) => { p.score = 0; });
      state.activePlayerIdx = 0;
    }
    blitzIdx = 0;
    tabooIdx = 0;
    structureTopicIdx = 0;
    pickDailyDouble();
    updateTranslateLabels();
    saveState();
    renderScoreboard();
    renderBoard();
  });

  timerSelect.addEventListener("change", () => {
    state.timerSeconds = Number(timerSelect.value);
    saveState();
  });

  soundToggleBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    soundToggleBtn.textContent = state.soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
    if (state.soundEnabled) sfx.open();
    saveState();
  });

  musicToggleBtn.addEventListener("click", () => {
    state.musicEnabled = !state.musicEnabled;
    musicToggleBtn.textContent = state.musicEnabled ? "🎵 Music On" : "🔇 Music Off";
    if (!state.musicEnabled) {
      stopThinkMusic();
    } else if (!clueModal.classList.contains("hidden") && timerInterval) {
      startThinkMusic();
    }
    saveState();
  });

  $("resetBoardBtn").addEventListener("click", () => {
    state.usedTiles = {};
    state.players.forEach((p) => (p.score = 0));
    pickDailyDouble();
    saveState();
    renderScoreboard();
    renderBoard();
  });

  $("closeModalBtn").addEventListener("click", closeClueModal);
  $("lockWagerBtn").addEventListener("click", lockDailyDoubleWager);
  revealAnswerBtn.addEventListener("click", () => {
    stopTimer();
    answerBox.classList.remove("hidden");
    revealAnswerBtn.classList.add("hidden");
  });

  $("finalJeopardyBtn").addEventListener("click", openFinalJeopardy);
  $("closeFinalBtn").addEventListener("click", () => {
    stopThinkMusic();
    finalModal.classList.add("hidden");
  });
  $("revealFinalClueBtn").addEventListener("click", () => {
    revealFinalClue();
    startThinkMusic();
  });
  $("showFinalAnswerBtn").addEventListener("click", () => {
    stopThinkMusic();
    finalAnswerBox.classList.remove("hidden");
    finalResolveList.classList.remove("hidden");
  });

  $("editBoardBtn").addEventListener("click", openEditor);
  $("closeEditorBtn").addEventListener("click", () => editorModal.classList.add("hidden"));
  playerCountInput.addEventListener("change", renderPlayerNameInputs);
  $("saveEditorBtn").addEventListener("click", saveEditorChanges);

  $("exportJsonBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state.deck, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "preply-jeopardy-deck.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  $("importJsonInput").addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(String(reader.result));
        if (Array.isArray(imported.categories) && imported.categories.length >= 5) {
          state.deck = imported;
          state.deckKey = "custom";
          state.usedTiles = {};
          saveState();
          openEditor();
          renderBoard();
        } else {
          alert("Invalid Jeopardy JSON format (expected at least 5 categories).");
        }
      } catch {
        alert("Could not parse JSON file.");
      }
    };
    reader.readAsText(file);
  });

  document.addEventListener("keydown", (e) => {
    if (clueModal.classList.contains("hidden")) return;
    if (e.key === "Escape") closeClueModal();
    if (e.code === "Space" && wagerView.classList.contains("hidden")) {
      e.preventDefault();
      stopTimer();
      answerBox.classList.remove("hidden");
      revealAnswerBtn.classList.add("hidden");
    }
  });

  // =========================
  // Bonus Round 1: Category Blitz (5 in 10/20 Seconds)
  // =========================
  const DEFAULT_BLITZ_PROMPTS = [
    "5 things on a board game table!",
    "5 reasons a customer calls your support line!",
    "5 things you do on a Sunday in Bologna!",
    "5 ways to cheat or win in a strategy game!",
    "5 adjectives to describe a bad movie or game!"
  ];

  const ABDI_BLITZ_PROMPTS = [
    "Name 5 DOING VERBS in English! (e.g., run, cook, drink, sleep, swim)",
    "Name 5 DAYS OF THE WEEK in English! (Monday, Tuesday...)",
    "Name 5 COUNTRIES in English! (Ethiopia, Japan, Egypt, UK, France...)",
    "Name 5 JOBS in English! (doctor, teacher, chef, driver, student...)",
    "Name 5 PLACES IN TOWN you can go to! (the coffee shop, the park, the market, the hospital, the gym)"
  ];

  const ABDI_BLITZ_OROMO = [
    "Gochima (doing verbs) 5 Afaan Ingiliffaan himi! (fkn: run, cook, drink, sleep, swim)",
    "Guyyoota torbanii 5 Afaan Ingiliffaan himi! (Monday, Tuesday, Wednesday, Thursday, Friday...)",
    "Maqaa biyyootaa 5 Afaan Ingiliffaan himi! (Ethiopia, Japan, Egypt, America, France...)",
    "Maqaa hojii (jobs) 5 Afaan Ingiliffaan himi! (doctor, teacher, chef, driver, student...)",
    "Iddoo magaalaa keessaa 5 himi! (the coffee shop, the park, the market, the hospital, the gym)"
  ];

  const GIULIA_BLITZ_PROMPTS = [
    "Name 5 'go + -ing' activities! (e.g., go shopping, go cycling, go swimming...)",
    "Name 5 IRREGULAR PAST verbs! (e.g., went, ate, bought, left, drove...)",
    "Name 5 things you see or buy when RENOVATING a house! (tiles, light switch, fixtures...)",
    "Name 5 SALES / BUSINESS words from your job! (client, incentive, onboarding, ROI, target...)",
    "Name 5 PLACES in Tuscany or town you go to! (to Pisa, to Florence, to the gym, to the supermarket...)"
  ];

  const GIULIA_BLITZ_ITALIAN = [
    "Nomina 5 attività con 'go + -ing' (es. go shopping, go cycling, go swimming... senza 'to'!)",
    "Nomina 5 verbi irregolari al passato (es. went, ate, bought, left, saw...)",
    "Nomina 5 cose per ristrutturare casa (es. tiles, light switch, fixtures, paint, lamp...)",
    "Nomina 5 parole del tuo lavoro nelle vendite (es. client, incentive, onboarding, ROI, target...)",
    "Nomina 5 posti in Toscana o in città usando 'to' (es. to Pisa, to Florence, to the gym...)"
  ];

  const BERNIE_BLITZ_PROMPTS = [
    "Name 5 EMERGENCY or TRIAGE words! (survivor, trapped, critical, bleeding, medevac...)",
    "Name 5 HEAVY RESCUE / USAR tools! (spreaders, rotary saw, snake camera, timber shoring, airbags...)",
    "Name 5 GROUND-ZERO HAZARDS! (gas leak, live power, secondary collapse, falling debris, unstable wall...)",
    "Name 5 CROWD SAFETY COMMANDS! (Step back!, Keep clear!, Do not enter!, Everyone quiet!, Safe zone!)",
    "Name 5 PFA COMFORTING PHRASES! (Look at me, You are safe, Breathe slowly, Take your time, Hold this water...)",
    "Name 5 FAVORITE FOODS OR DRINKS! (mate, empanadas, chicken soup, asado, ice cream...)",
    "Name 5 FUN THINGS TO DO ON A FREE SUNDAY! (drink mate, watch a movie, visit family, walk in the park, listen to music...)"
  ];

  const BERNIE_BLITZ_SPANISH = [
    "Nombrá 5 palabras de EMERGENCIA o TRIAJE (ej. survivor, trapped, critical, bleeding, medevac...)",
    "Nombrá 5 herramientas de RESCATE PESADO / USAR (ej. spreaders, rotary saw, snake camera, timber shoring...)",
    "Nombrá 5 PELIGROS en zona de impacto (ej. gas leak, live power, secondary collapse, falling debris...)",
    "Nombrá 5 COMANDOS de control de multitudes (ej. Step back!, Keep clear!, Do not enter!, Everyone quiet!...)",
    "Nombrá 5 FRASES DE CALMA / PFA (ej. Look at me, You are safe, Breathe slowly, Take your time...)",
    "Nombrá 5 COMIDAS O BEBIDAS FAVORITAS (ej. mate, empanadas, chicken soup, asado, ice cream...)",
    "Nombrá 5 COSAS DIVERTIDAS PARA UN DOMINGO LIBRE (ej. drink mate, watch a movie, visit family, walk in the park...)"
  ];

  const VINH_BLITZ_PROMPTS = [
    "Name 5 FRESHWATER OR SALTWATER FISH! (bass, salmon, trout, catfish, tuna...)",
    "Name 5 THINGS IN A FISHING TACKLE BOX! (hook, lure, bobber, line, sinker...)",
    "Name 5 EUROPEAN COUNTRIES OR CAPITALS! (Netherlands, Portugal, London, Lisbon, Amsterdam...)",
    "Name 5 U.S. STATES! (Virginia, Alaska, Louisiana, Maryland, California...)",
    "Name 5 FAMOUS PLACES OR FOODS IN VIETNAM! (Hanoi, Hội An, Bạch Đằng, phở, bánh mì...)"
  ];

  const VINH_BLITZ_VIETNAMESE = [
    "Kể tên 5 loài CÁ nước ngọt hoặc nước mặn bằng tiếng Anh!",
    "Kể tên 5 món đồ trong HỘP ĐỒ CÂU CÁ (móc câu, mồi giả, phao, dây cước, chì...)",
    "Kể tên 5 quốc gia hoặc thủ đô ở CHÂU ÂU!",
    "Kể tên 5 tiểu bang của MỸ!",
    "Kể tên 5 địa danh lịch sử hoặc món ăn nổi tiếng của VIỆT NAM!"
  ];

  const WEIJING_BLITZ_PROMPTS = [
    "Name 5 ELEMENTS on the Periodic Table in 15 seconds!",
    "Name 5 MARTIAL ARTS or COMBAT SPORTS in 15 seconds!",
    "Name 5 CITIES, ISLANDS, or LANDMARKS in Japan in 15 seconds!",
    "Name 5 GLOBAL SEMICONDUCTOR or AI HARDWARE companies in 15 seconds!",
    "Name 5 NOBEL-LEVEL SCIENTISTS or INVENTORS in history in 15 seconds!"
  ];

  const WEIJING_BLITZ_CHINESE = [
    "15秒说出元素周期表上的 5 种化学元素（英文）！",
    "15秒说出 5 种武术或格斗运动！",
    "15秒说出日本的 5 座城市、岛屿或地标！",
    "15秒说出 5 家全球芯片或 AI 硬件巨头公司！",
    "15秒说出历史上 5 位著名科学家或发明家！"
  ];

  function isWeiJingDeck() {
    return state.deckKey === "weijing";
  }

  function isVinhDeck() {
    return state.deckKey === "vinh";
  }

  function isBernieDeck() {
    return state.deckKey.startsWith("bernie_");
  }

  function isGiuliaDeck() {
    return state.deckKey === "giulia" || state.deckKey === "giulia_chill";
  }

  function getBlitzPrompts() {
    if (isWeiJingDeck()) return WEIJING_BLITZ_PROMPTS;
    if (isVinhDeck()) return VINH_BLITZ_PROMPTS;
    if (state.deckKey === "abdi") return ABDI_BLITZ_PROMPTS;
    if (isBernieDeck()) return BERNIE_BLITZ_PROMPTS;
    if (isGiuliaDeck()) return GIULIA_BLITZ_PROMPTS;
    return DEFAULT_BLITZ_PROMPTS;
  }

  function getBlitzDurationMs() {
    if (state.deckKey === "abdi") return 20000;
    if (isWeiJingDeck() || isVinhDeck() || isBernieDeck() || isGiuliaDeck()) return 15000;
    return 10000;
  }

  const blitzModal = $("blitzModal");
  const blitzTimerEl = $("blitzTimer");
  const blitzCounterLabel = $("blitzCounterLabel");
  const blitzPromptEl = $("blitzPrompt");
  const blitzDots = [...document.querySelectorAll("#blitzDots .blitz-dot")];
  const blitzAwardRow = $("blitzAwardRow");

  let blitzIdx = 0;
  let blitzInterval = null;
  let blitzRemainingMs = 10000;

  function stopBlitzTimer() {
    if (blitzInterval) {
      clearInterval(blitzInterval);
      blitzInterval = null;
    }
  }

  function renderBlitzPrompt() {
    stopBlitzTimer();
    const prompts = getBlitzPrompts();
    if (blitzIdx >= prompts.length) blitzIdx = 0;
    blitzRemainingMs = getBlitzDurationMs();
    blitzTimerEl.textContent = (blitzRemainingMs / 1000).toFixed(1);
    blitzTimerEl.classList.remove("danger");
    blitzCounterLabel.textContent = `Prompt ${blitzIdx + 1} of ${prompts.length}`;
    blitzPromptEl.textContent = prompts[blitzIdx];
    const blitzBadge = blitzModal?.querySelector(".dd-badge");
    if (blitzBadge) blitzBadge.textContent = `5 IN ${Math.round(blitzRemainingMs / 1000)} SECONDS`;
    const startBtn = $("blitzStartBtn");
    if (startBtn) {
      if (state.deckKey === "abdi") startBtn.textContent = "▶ Start 20s Timer";
      else if (isWeiJingDeck() || isVinhDeck() || isGiuliaDeck() || isBernieDeck()) startBtn.textContent = "▶ Start 15s Timer";
      else startBtn.textContent = "▶ Start 10s Timer";
    }
    $("blitzTranslateBox").classList.add("hidden");
    blitzDots.forEach((d) => d.classList.remove("checked"));
  }

  function renderBlitzAwardButtons() {
    blitzAwardRow.innerHTML = "";
    state.players.forEach((player, idx) => {
      const group = document.createElement("div");
      group.className = "award-group";

      const label = document.createElement("span");
      label.className = "award-player-label";
      label.textContent = player.name;

      const winBtn = document.createElement("button");
      winBtn.type = "button";
      winBtn.className = "btn btn-green";
      winBtn.textContent = "+$300 (5/5)";
      winBtn.onclick = () => {
        sfx.correct();
        player.score += 300;
        state.activePlayerIdx = idx;
        saveState();
        renderScoreboard();
      };

      const partialBtn = document.createElement("button");
      partialBtn.type = "button";
      partialBtn.className = "btn btn-secondary";
      partialBtn.textContent = "+$100";
      partialBtn.onclick = () => {
        sfx.open();
        player.score += 100;
        saveState();
        renderScoreboard();
      };

      group.append(label, winBtn, partialBtn);
      blitzAwardRow.appendChild(group);
    });
  }

  function startBlitzTimer() {
    stopBlitzTimer();
    blitzRemainingMs = getBlitzDurationMs();
    blitzTimerEl.classList.remove("danger");
    sfx.open();

    blitzInterval = setInterval(() => {
      blitzRemainingMs -= 100;
      if (blitzRemainingMs <= 3000 && blitzRemainingMs > 0) {
        blitzTimerEl.classList.add("danger");
      }
      if (blitzRemainingMs <= 0) {
        stopBlitzTimer();
        blitzTimerEl.textContent = "0.0";
        sfx.timeUp();
        return;
      }
      blitzTimerEl.textContent = (blitzRemainingMs / 1000).toFixed(1);
    }, 100);
  }

  blitzDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      dot.classList.toggle("checked");
      playTone(660, 0.06, "triangle");
    });
  });

  $("blitzBtn").addEventListener("click", () => {
    renderBlitzPrompt();
    renderBlitzAwardButtons();
    blitzModal.classList.remove("hidden");
  });

  $("closeBlitzBtn").addEventListener("click", () => {
    stopBlitzTimer();
    blitzModal.classList.add("hidden");
  });

  $("blitzStartBtn").addEventListener("click", startBlitzTimer);
  $("blitzNextBtn").addEventListener("click", () => {
    const prompts = getBlitzPrompts();
    blitzIdx = (blitzIdx + 1) % prompts.length;
    renderBlitzPrompt();
  });

  // =========================
  // Bonus Round 2: Taboo
  // =========================
  const DEFAULT_TABOO_CARDS = [
    { target: "BOARD GAME", forbidden: ["dice", "pieces", "table", "play", "turn"] },
    { target: "DUNGEON MASTER", forbidden: ["D&D", "dragon", "roleplay", "story", "dice"] },
    { target: "PLOT TWIST", forbidden: ["movie", "surprise", "ending", "story", "shock"] },
    { target: "CUSTOMER SUPPORT", forbidden: ["help", "problem", "call", "ticket", "angry"] },
    { target: "BOLOGNA", forbidden: ["Italy", "pasta", "towers", "food", "Sunday"] },
    { target: "BOSS FIGHT", forbidden: ["video game", "final", "level", "monster", "beat"] },
    { target: "SPOILER", forbidden: ["movie", "ending", "ruin", "secret", "tell"] },
    { target: "RULEBOOK", forbidden: ["read", "game", "instructions", "pages", "how"] },
    { target: "SERVER CRASH", forbidden: ["down", "internet", "error", "computer", "website"] },
    { target: "CHECKMATE", forbidden: ["chess", "king", "win", "move", "queen"] },
    { target: "MULTIPLAYER", forbidden: ["online", "friends", "team", "game", "together"] },
    { target: "EASTER EGG", forbidden: ["hidden", "secret", "game", "movie", "find"] }
  ];

  const ABDI_TABOO_CARDS = [
    { target: "COFFEE SHOP ☕", forbidden: ["Say Clue: 'I drink hot bunna here!'", "Sentence: 'I go to the...'"], oromo: "Mana bunaa (I go to the coffee shop)" },
    { target: "WAKE UP ⏰", forbidden: ["Say Clue: '7 o'clock in the morning!'", "Sentence: 'I ___ at 7:00.'"], oromo: "Hirribaa ka'uu (I wake up at seven o'clock)" },
    { target: "DOCTOR 🏥", forbidden: ["Say Clue: 'He works in a hospital!'", "Sentence: 'He is a...'"], oromo: "Doktora (He is a doctor. He works in a hospital)" },
    { target: "WATCH MY PHONE 📱", forbidden: ["Say Clue: 'I don't watch TV!'", "Sentence: 'I watch my...'"], oromo: "Bilbila koo nan ilaala (I don't watch TV. I watch my phone)" },
    { target: "THE MARKET 🧺", forbidden: ["Say Clue: 'I go here on Friday to buy food!'", "Sentence: 'I go to the...'"], oromo: "Gabaa (I go to the market on Friday)" },
    { target: "BRUSH MY TEETH 🪥", forbidden: ["Say Clue: 'Every morning in the bathroom!'", "Sentence: 'I brush my...'"], oromo: "Ilkaan koo nan rigadha (I brush my teeth)" },
    { target: "PLAY FOOTBALL ⚽", forbidden: ["Say Clue: 'A sport on Saturday!'", "Sentence: 'He plays... / He doesn't play...'"], oromo: "Kubbaa miilaa taphachuu (He plays football)" },
    { target: "CHEF 👨‍🍳", forbidden: ["Say Clue: 'He cooks food in a restaurant!'", "Sentence: 'He is a...'"], oromo: "Bilcheessaa / Sheefii (He is a chef)" }
  ];

  const GIULIA_TABOO_CARDS = [
    { target: "SMART WORKING 💻", forbidden: ["home", "office", "remote", "laptop", "work"], italian: "Lavorare da casa senza usare le parole vietate!" },
    { target: "INCENTIVE SOFTWARE 📊", forbidden: ["sales", "bonus", "commission", "company", "team"], italian: "Il software che vendi alle aziende per motivare i venditori!" },
    { target: "LUCCA WALL 🚴‍♀️", forbidden: ["bike", "cycling", "lap", "wall", "Tuscany"], italian: "Le mura di Lucca dove fai un giro in bici in pausa pranzo!" },
    { target: "RENOVATION 🏠", forbidden: ["house", "Pisa", "tiles", "fixtures", "build"], italian: "Ristrutturare casa (senza dire house, Pisa, tiles, fixtures, build)!" },
    { target: "APERITIVO 🍹", forbidden: ["drink", "dinner", "friends", "snack", "bar"], italian: "Il momento prima di cena con gli amici!" },
    { target: "LIGHT SWITCH 💡", forbidden: ["wall", "light", "button", "turn on", "lamp"], italian: "L'interruttore sul muro (usa 'What I mean is...' se serve!)" },
    { target: "SAFARI 🦁", forbidden: ["Kenya", "animals", "Africa", "zoo", "holiday"], italian: "Il viaggio estivo in Kenya tra gli animali!" },
    { target: "ALL SAINTS' DAY 🌸", forbidden: ["flowers", "Florence", "November", "mother", "sell"], italian: "Ognissanti: i fiori venduti a Firenze con la tua famiglia!" }
  ];

  const BERNIE_TABOO_CARDS = [
    { target: "HYDRAULIC SPREADERS 🛠️", forbidden: ["jaws", "cut", "metal", "rescue", "open"], spanish: "Las herramientas hidráulicas para abrir o separar estructuras colapsadas." },
    { target: "SAFE ZONE 🛡️", forbidden: ["shelter", "danger", "people", "building", "move"], spanish: "El área abierta y libre de peligros adonde guiás a los civiles." },
    { target: "ACOUSTIC SEARCH 🎧", forbidden: ["listen", "quiet", "noise", "victim", "microphone"], spanish: "Cuando pedís silencio total para escuchar golpes o voces bajo los escombros." },
    { target: "TRIAGE 🚑", forbidden: ["red", "green", "doctor", "priority", "injured"], spanish: "Clasificar a los heridos según su gravedad." },
    { target: "SECONDARY COLLAPSE ⚠️", forbidden: ["fall", "building", "danger", "again", "structure"], spanish: "Cuando una estructura dañada vuelve a derrumbarse." },
    { target: "MEDEVAC 🚁", forbidden: ["helicopter", "hospital", "critical", "ambulance", "fly"], spanish: "Evacuación médica urgente de pacientes críticos." },
    { target: "PSYCHOLOGICAL FIRST AID 🤝", forbidden: ["calm", "cry", "shock", "trauma", "breathe"], spanish: "Contención emocional inicial para personas en crisis." },
    { target: "TIMBER SHORING 🪵", forbidden: ["wood", "support", "wall", "collapse", "beam"], spanish: "Apuntalamiento con madera para sostener paredes o techos inestables." },
    { target: "MATE 🧉", forbidden: ["Argentina", "tea", "hot", "water", "drink"], spanish: "¡La infusión tradicional argentina para compartir con amigos o familia!" },
    { target: "CHICKEN SOUP 🍲", forbidden: ["grandma", "hot", "sick", "bowl", "eat"], spanish: "La sopa casera de la abuela cuando necesitás algo calentito y rico." },
    { target: "SUNDAY ASADO 🔥", forbidden: ["meat", "grill", "family", "Sunday", "fire"], spanish: "El clásico encuentro familiar del domingo a la parrilla." },
    { target: "UNPACKING GAME 📦", forbidden: ["boxes", "room", "kitchen", "organize", "video game"], spanish: "El juego tranquilo donde ordenás cajas y cosas de la casa." }
  ];

  const VINH_TABOO_CARDS = [
    { target: "CATCH AND RELEASE 🎣", forbidden: ["fish", "hook", "water", "throw", "alive"], vietnamese: "Câu cá thể thao rồi thả lại xuống nước!" },
    { target: "TULIP MANIA 🌷", forbidden: ["flower", "Netherlands", "bubble", "expensive", "crash"], vietnamese: "Bong bóng hoa tulip ở Hà Lan năm 1637!" },
    { target: "MAGNA CARTA 📜", forbidden: ["king", "England", "1215", "law", "sign"], vietnamese: "Đại Hiến Chương năm 1215 buộc vua Anh tuân theo luật pháp!" },
    { target: "BASKET BOAT 🛶", forbidden: ["round", "bamboo", "Vietnam", "fisherman", "ocean"], vietnamese: "Thuyền thúng (thúng chai) của ngư dân Việt Nam!" },
    { target: "ALASKA ❄️", forbidden: ["Russia", "state", "cold", "buy", "salmon"], vietnamese: "Tiểu bang lạnh giá Mỹ mua lại từ Nga năm 1867!" },
    { target: "HỘI AN 🏮", forbidden: ["lanterns", "port", "yellow", "bridge", "Vietnam"], vietnamese: "Phố cổ thương cảng nổi tiếng ở miền Trung Việt Nam!" },
    { target: "THE VIKINGS ⛵", forbidden: ["ship", "Scandinavia", "Columbus", "America", "warrior"], vietnamese: "Những nhà thám hiểm Bắc Âu đặt chân tới Bắc Mỹ trước Columbus!" },
    { target: "LARGEMOUTH BASS 🐟", forbidden: ["fish", "lake", "mouth", "America", "fishing"], vietnamese: "Loài cá vược miệng rộng nổi tiếng nhất ở các hồ nước Mỹ!" }
  ];

  const WEIJING_TABOO_CARDS = [
    { target: "QUANTUM TUNNELING ⚛️", forbidden: ["electron", "wall", "chip", "barrier", "physics"], chinese: "1纳米以下电子直接穿墙的量子效应（禁用：electron, wall, chip, barrier, physics）！" },
    { target: "SURVIVORSHIP BIAS ✈️", forbidden: ["plane", "bullet", "survive", "WWII", "data"], chinese: "二战轰炸机弹孔的经典逻辑盲区（禁用：plane, bullet, survive, WWII, data）！" },
    { target: "WHITE ELEPHANT 🐘", forbidden: ["Thailand", "gift", "expensive", "king", "useless"], chinese: "昂贵却无用、甩不掉的烫手资产（禁用：Thailand, gift, expensive, king, useless）！" },
    { target: "CATCH-22 🔄", forbidden: ["paradox", "trap", "experience", "job", "rule"], chinese: "左右为难的无解循环悖论（禁用：paradox, trap, experience, job, rule）！" },
    { target: "MONTY HALL PROBLEM 🚪", forbidden: ["goat", "car", "door", "switch", "three"], chinese: "换门中奖率2/3的经典概率谜题（禁用：goat, car, door, switch, three）！" },
    { target: "GALLIUM 🧪", forbidden: ["metal", "melt", "hand", "liquid", "mercury"], chinese: "放在手心就会融化的31号奇特元素（禁用：metal, melt, hand, liquid, mercury）！" },
    { target: "LOSS AVERSION 📉", forbidden: ["lose", "win", "pain", "money", "twice"], chinese: "亏钱痛苦是赚钱快乐两倍的行为经济学偏误（禁用：lose, win, pain, money, twice）！" },
    { target: "AQUA REGIA 👑", forbidden: ["gold", "acid", "dissolve", "Nobel", "royal"], chinese: "唯一能溶解纯金的1:3混酸“王水”（禁用：gold, acid, dissolve, Nobel, royal）！" },
    { target: "AURORA BOREALIS 🌌", forbidden: ["Northern Lights", "green", "sky", "Sun", "magnetic"], chinese: "北极光的科学拉丁学名（禁用：Northern Lights, green, sky, Sun, magnetic）！" },
    { target: "SPAM 📧", forbidden: ["email", "junk", "meat", "Vikings", "delete"], chinese: "源于英国喜剧团小品的垃圾信息（禁用：email, junk, meat, Vikings, delete）！" }
  ];

  function getTabooCards() {
    if (isWeiJingDeck()) return WEIJING_TABOO_CARDS;
    if (isVinhDeck()) return VINH_TABOO_CARDS;
    if (state.deckKey === "abdi") return ABDI_TABOO_CARDS;
    if (isBernieDeck()) return BERNIE_TABOO_CARDS;
    if (isGiuliaDeck()) return GIULIA_TABOO_CARDS;
    return DEFAULT_TABOO_CARDS;
  }

  const tabooModal = $("tabooModal");
  const tabooTimerEl = $("tabooTimer");
  const tabooRoundScoreEl = $("tabooRoundScore");
  const tabooTargetEl = $("tabooTarget");
  const tabooListEl = $("tabooList");
  const tabooAwardRow = $("tabooAwardRow");

  let tabooIdx = 0;
  let tabooRoundPoints = 0;
  let tabooInterval = null;
  let tabooRemaining = 45;

  function stopTabooTimer() {
    if (tabooInterval) {
      clearInterval(tabooInterval);
      tabooInterval = null;
    }
  }

  function renderTabooCard() {
    const cards = getTabooCards();
    if (tabooIdx >= cards.length) tabooIdx = 0;
    const card = cards[tabooIdx];
    tabooTargetEl.textContent = card.target;
    $("tabooTranslateBox").classList.add("hidden");
    const forbiddenLabel = document.querySelector(".taboo-forbidden-label");
    if (forbiddenLabel) {
      forbiddenLabel.textContent = state.deckKey === "abdi" ? "SPEAKING HELPER CLUES" : "FORBIDDEN WORDS";
    }
    tabooListEl.innerHTML = "";
    card.forbidden.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word;
      tabooListEl.appendChild(li);
    });
    tabooRoundScoreEl.textContent = `Round: ${tabooRoundPoints < 0 ? "-" : ""}$${Math.abs(tabooRoundPoints)}`;
  }

  function renderTabooAwardButtons() {
    tabooAwardRow.innerHTML = "";
    state.players.forEach((player, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-gold";
      btn.textContent = `Bank Round to ${player.name}`;
      btn.onclick = () => {
        sfx.correct();
        player.score += tabooRoundPoints;
        state.activePlayerIdx = idx;
        tabooRoundPoints = 0;
        renderTabooCard();
        saveState();
        renderScoreboard();
      };
      tabooAwardRow.appendChild(btn);
    });
  }

  function startTabooTimer() {
    stopTabooTimer();
    tabooRemaining = 45;
    tabooTimerEl.textContent = "45";
    tabooTimerEl.classList.remove("danger");
    sfx.open();

    tabooInterval = setInterval(() => {
      tabooRemaining -= 1;
      tabooTimerEl.textContent = String(tabooRemaining);
      if (tabooRemaining <= 10 && tabooRemaining > 0) {
        tabooTimerEl.classList.add("danger");
      }
      if (tabooRemaining <= 0) {
        stopTabooTimer();
        tabooTimerEl.textContent = "TIME";
        sfx.timeUp();
      }
    }, 1000);
  }

  $("tabooBtn").addEventListener("click", () => {
    stopTabooTimer();
    tabooRemaining = 45;
    tabooTimerEl.textContent = "45";
    tabooTimerEl.classList.remove("danger");
    tabooRoundPoints = 0;
    renderTabooCard();
    renderTabooAwardButtons();
    tabooModal.classList.remove("hidden");
  });

  $("closeTabooBtn").addEventListener("click", () => {
    stopTabooTimer();
    tabooModal.classList.add("hidden");
  });

  $("tabooStartBtn").addEventListener("click", startTabooTimer);
  $("tabooGotItBtn").addEventListener("click", () => {
    sfx.correct();
    tabooRoundPoints += 200;
    const cards = getTabooCards();
    tabooIdx = (tabooIdx + 1) % cards.length;
    renderTabooCard();
  });

  $("tabooBuzzBtn").addEventListener("click", () => {
    sfx.wrong();
    tabooRoundPoints -= 100;
    const cards = getTabooCards();
    tabooIdx = (tabooIdx + 1) % cards.length;
    renderTabooCard();
  });

  $("tabooNextBtn").addEventListener("click", () => {
    const cards = getTabooCards();
    tabooIdx = (tabooIdx + 1) % cards.length;
    renderTabooCard();
  });

  // =========================
  // Slow Speech (TTS) & Afaan Oromoo / Italian Translation Helper
  // =========================
  function speakSlowEnglish(text) {
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const clean = String(text || "").replace(/[🟢🔴⏰🍕🇪🇹🏙️🌍📅❌✅]/g, "").trim();
      if (!clean) return;
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = "en-US";
      u.rate = state.deckKey === "abdi" ? 0.78 : 0.92;
      window.speechSynthesis.speak(u);
    } catch (_) {}
  }

  if ($("speakClueBtn")) {
    $("speakClueBtn").addEventListener("click", () => {
      const ansVisible = !answerBox.classList.contains("hidden");
      const textToRead = ansVisible ? `${clueText.textContent}. ${answerText.textContent}` : clueText.textContent;
      speakSlowEnglish(textToRead);
    });
  }

  if ($("speakFinalBtn")) {
    $("speakFinalBtn").addEventListener("click", () => {
      const ansVisible = !finalAnswerBox.classList.contains("hidden");
      const textToRead = ansVisible ? `${finalClueText.textContent}. ${finalAnswerText.textContent}` : finalClueText.textContent;
      speakSlowEnglish(textToRead);
    });
  }

  function updateTranslateLabels() {
    const isAbdi = state.deckKey === "abdi";
    const isWeiJing = isWeiJingDeck();
    const isVinh = isVinhDeck();
    const isGiulia = isGiuliaDeck();
    const isBernie = isBernieDeck();
    if ($("howToPlayBtn")) {
      $("howToPlayBtn").classList.remove("hidden");
    }
    const badgeText = isAbdi
      ? "🇪🇹 Afaan Oromoo"
      : isWeiJing
      ? "✨ 中文提示 (Hint)"
      : isVinh
      ? "🇻🇳 Vietnamese Hint"
      : isBernie
      ? "🇦🇷 Español (AR)"
      : isGiulia
      ? "🇮🇹 Italian Tip"
      : "🇮🇹 Italiano";
    const btnFullText = isAbdi
      ? "🇪🇹 Afaan Oromoo Clue"
      : isWeiJing
      ? "✨ 中文提示 (Chinese Hint)"
      : isVinh
      ? "🇻🇳 Vietnamese Hint"
      : isBernie
      ? "🇦🇷 Español (AR)"
      : isGiulia
      ? "🇮🇹 Italian Tip"
      : "🇮🇹 Translate to Italian";
    const btnShortText = isAbdi
      ? "🇪🇹 Afaan Oromoo"
      : isWeiJing
      ? "✨ 中文提示"
      : isVinh
      ? "🇻🇳 Hint"
      : isBernie
      ? "🇦🇷 Español"
      : isGiulia
      ? "🇮🇹 Tip"
      : "🇮🇹 Translate";

    ["clueTranslateLabel", "finalTranslateLabel", "blitzTranslateLabel", "tabooTranslateLabel"].forEach((id) => {
      const el = $(id);
      if (el) el.textContent = badgeText;
    });
    if ($("translateClueBtn")) $("translateClueBtn").textContent = btnFullText;
    if ($("translateFinalBtn")) $("translateFinalBtn").textContent = btnFullText;
    if ($("translateBlitzBtn")) $("translateBlitzBtn").textContent = btnShortText;
    if ($("translateTabooBtn")) $("translateTabooBtn").textContent = btnShortText;
  }

  const translationCache = new Map();

  async function translateText(text, targetLang = "it") {
    const clean = (text || "").trim();
    if (!clean) return "";
    const cacheKey = `${targetLang}:${clean}`;
    if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

    // 1) Try Google Translate public endpoint (CORS-friendly)
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(clean)}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const translated = (data?.[0] || []).map((part) => part?.[0] || "").join("").trim();
        if (translated) {
          translationCache.set(cacheKey, translated);
          return translated;
        }
      }
    } catch (_) {}

    // 2) Fallback to MyMemory API
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=en|${targetLang}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const translated = data?.responseData?.translatedText?.trim();
        if (translated) {
          translationCache.set(cacheKey, translated);
          return translated;
        }
      }
    } catch (_) {}

    return null;
  }

  async function handleTranslateClick(btn, boxEl, textEl, getSourceText, getDirectOromo) {
    if (!boxEl.classList.contains("hidden")) {
      boxEl.classList.add("hidden");
      return;
    }
    updateTranslateLabels();

    if ((state.deckKey === "abdi" || isWeiJingDeck() || isVinhDeck() || isGiuliaDeck() || isBernieDeck()) && typeof getDirectOromo === "function") {
      const direct = getDirectOromo();
      if (direct) {
        textEl.textContent = direct;
        boxEl.classList.remove("hidden");
        return;
      }
    }

    const targetLang = state.deckKey === "abdi"
      ? "om"
      : isWeiJingDeck()
      ? "zh-CN"
      : isVinhDeck()
      ? "vi"
      : isBernieDeck()
      ? "es"
      : "it";
    const source = getSourceText();
    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = "⏳ Translating...";
    const translated = await translateText(source, targetLang);
    btn.disabled = false;
    btn.textContent = originalLabel;

    if (translated) {
      textEl.textContent = translated;
      boxEl.classList.remove("hidden");
    } else {
      window.open(`https://translate.google.com/?sl=en&tl=${targetLang}&text=${encodeURIComponent(source)}&op=translate`, "_blank");
    }
  }

  $("translateClueBtn").addEventListener("click", () => {
    const clue = clueText.textContent;
    const ansVisible = !answerBox.classList.contains("hidden");
    const source = ansVisible ? `${clue}\n\nAnswer: ${answerText.textContent}` : clue;
    handleTranslateClick(
      $("translateClueBtn"),
      $("clueTranslateBox"),
      $("clueTranslateText"),
      () => source,
      () => isWeiJingDeck() ? activeTile?.item?.chinese : (isVinhDeck() ? activeTile?.item?.vietnamese : (isBernieDeck() ? activeTile?.item?.spanish : (isGiuliaDeck() ? activeTile?.item?.italian : activeTile?.item?.oromo)))
    );
  });

  $("translateFinalBtn").addEventListener("click", () => {
    handleTranslateClick(
      $("translateFinalBtn"),
      $("finalTranslateBox"),
      $("finalTranslateText"),
      () => finalClueText.textContent,
      () => isWeiJingDeck() ? state.deck?.final?.chinese : (isVinhDeck() ? state.deck?.final?.vietnamese : (isBernieDeck() ? state.deck?.final?.spanish : (isGiuliaDeck() ? state.deck?.final?.italian : state.deck?.final?.oromo)))
    );
  });

  $("translateBlitzBtn").addEventListener("click", () => {
    handleTranslateClick(
      $("translateBlitzBtn"),
      $("blitzTranslateBox"),
      $("blitzTranslateText"),
      () => blitzPromptEl.textContent,
      () => isWeiJingDeck() ? WEIJING_BLITZ_CHINESE[blitzIdx] : (isVinhDeck() ? VINH_BLITZ_VIETNAMESE[blitzIdx] : (isBernieDeck() ? BERNIE_BLITZ_SPANISH[blitzIdx] : (isGiuliaDeck() ? GIULIA_BLITZ_ITALIAN[blitzIdx] : ABDI_BLITZ_OROMO[blitzIdx])))
    );
  });

  $("translateTabooBtn").addEventListener("click", () => {
    const cards = getTabooCards();
    const card = cards[tabooIdx];
    const source = `${card.target} (${card.forbidden.join(", ")})`;
    handleTranslateClick(
      $("translateTabooBtn"),
      $("tabooTranslateBox"),
      $("tabooTranslateText"),
      () => source,
      () => isWeiJingDeck() ? card?.chinese : (isVinhDeck() ? card?.vietnamese : (isBernieDeck() ? card?.spanish : (isGiuliaDeck() ? card?.italian : card?.oromo)))
    );
  });

  // =========================
  // Bonus Round 3: Structure Sprint (Past • Present • Future / Abdi A1 Routines)
  // =========================
  const DEFAULT_STRUCTURE_TOPICS = [
    {
      topic: "TV Series & Movies (Gilmore Girls, A Beautiful Mind)",
      framework: "PAST • PRESENT • FUTURE",
      phases: ["1. PAST", "2. PRESENT", "3. FUTURE"],
      tips: [
        "Past (60s): What did you watch when you were younger (e.g., comedies, rom-coms)?",
        "Present (60s): What TV series or films grab you now? (Remember: 'TV series', not 'serials'!)",
        "Future (60s): Will your taste change, or are you hoping for a Gilmore Girls reboot?"
      ]
    },
    {
      topic: "Your Current Sales Team & Role",
      framework: "PAST • PRESENT • FUTURE",
      phases: ["1. PAST", "2. PRESENT", "3. FUTURE"],
      tips: [
        "Past (60s): How did your two-person team work before your boss left in April?",
        "Present (60s): What is it like running a one-man show and wearing two hats right now?",
        "Future (60s): What is your ideal 3-person team setup (Key Account + APM + back-office)?"
      ]
    },
    {
      topic: "Holidays & Travel (Czechia, Dubai, Spain/Portugal)",
      framework: "PAST • PRESENT • FUTURE",
      phases: ["1. PAST", "2. PRESENT", "3. FUTURE"],
      tips: [
        "Past (60s): What were family holidays like in the Czech Republic when you were a child?",
        "Present (60s): Tell us about your Dubai 'girls' trips' with your daughter and mother!",
        "Future (60s): Where is next—Barcelona, Portugal, or traveling more than once a year?"
      ]
    },
    {
      topic: "Semiconductor Key Account Briefing (C-Level)",
      framework: "PAST • PRESENT • FUTURE",
      phases: ["1. PAST", "2. PRESENT", "3. FUTURE"],
      tips: [
        "Past (60s): Summarize the client's history and previous deliveries.",
        "Present (60s): Give the current status (lines of credit, supply, scope of work).",
        "Future (60s): State the next-quarter plan and what you anticipate they will need."
      ]
    },
    {
      topic: "Delegating to Back-Office Support",
      framework: "SITUATION • BOTTLENECK • ASK",
      phases: ["1. SITUATION", "2. BOTTLENECK", "3. ASK"],
      tips: [
        "Situation (60s): Explain your current workload while wearing two hats.",
        "Bottleneck (60s): Identify what is slowing down strategic account work.",
        "Ask (60s): Clearly state what back-office support you need to fill the gap."
      ]
    }
  ];

  const ABDI_STRUCTURE_TOPICS = [
    {
      topic: "Abdi's Complete Day (Morning • Afternoon • Evening)",
      framework: "MORNING • AFTERNOON • EVENING",
      phases: ["1. MORNING ☀️", "2. AFTERNOON 🌤️", "3. EVENING & NIGHT 🌙"],
      tips: [
        "Morning: 'I wake up at 7:00 in the morning. I wash my face and brush my teeth. I eat breakfast at half past eight.'",
        "Afternoon: 'In the afternoon, I eat lunch. I go to the coffee shop. I study English.'",
        "Evening & Night: 'In the evening, I eat dinner at home. I don't watch TV. I watch my phone. I sleep at night.'"
      ]
    },
    {
      topic: "Things I Do vs. Things I Don't Do (Yes & No)",
      framework: "YES (I DO) • NO (I DON'T) • PLACES I GO",
      phases: ["1. YES (I...) 🟢", "2. NO (I don't...) 🔴", "3. PLACES I GO 🏙️"],
      tips: [
        "YES (Say 3 sentences): 'I drink coffee. I watch my phone every day. I eat at home.'",
        "NO (Say 3 sentences): 'I don't watch TV. I don't eat out. I don't smoke.'",
        "PLACES (Say 2 places): 'I go to the coffee shop. I go to the market on Friday. I don't go to the cinema.'"
      ]
    },
    {
      topic: "Me vs. My Friend (I vs. He / She)",
      framework: "ABOUT ME • FRIEND (YES -S) • FRIEND (NO DOESN'T)",
      phases: ["1. ABOUT ME (I)", "2. FRIEND YES (-s) 🟢", "3. FRIEND NO (doesn't) 🔴"],
      tips: [
        "About Me: 'My name is Abdi. I am from Ethiopia. I am a student.'",
        "My Friend YES (Keep -s!): 'He plays football on Saturday. She cooks dinner at home. He goes to the coffee shop.'",
        "My Friend NO (No -s with doesn't!): 'He doesn't play football. He doesn't watch TV. She doesn't eat out.'"
      ]
    }
  ];

  const GIULIA_STRUCTURE_TOPICS = [
    {
      topic: "House Renovation in Lucca & Pisa 🏠",
      framework: "PAST • PRESENT • FUTURE",
      phases: ["1. PAST (What you bought/did)", "2. PRESENT (Current stage)", "3. FUTURE (Next step)"],
      tips: [
        "Past: 'Last month I went to Pisa and I bought tiles and fixtures.'",
        "Present: 'Right now, we are choosing light switches and painting the walls.'",
        "Future: 'Next month I will move in and host a dinner for my friends!'"
      ]
    },
    {
      topic: "Enterprise Software Pitch (3-Step Formula) 💼",
      framework: "MACRO PROBLEM • SOLUTION • LOW-FRICTION ROI",
      phases: ["1. MACRO PROBLEM", "2. TARGETED SOLUTION", "3. LOW-FRICTION ROI"],
      tips: [
        "Macro Problem: 'Sales teams are missing Q4 targets because bonus rules feel unclear.'",
        "Targeted Solution: 'To keep motivation high, our software shows real-time commissions.'",
        "Low-Friction ROI: 'It integrates quickly with your CRM and requires zero extra admin.'"
      ]
    },
    {
      topic: "My Tuscan Week (Work • Cycling • Weekend) 🚴‍♀️",
      framework: "ROUTINE • LAST WEEKEND • NEXT WEEKEND",
      phases: ["1. ROUTINE (go + -ing)", "2. LAST WEEKEND (Past)", "3. NEXT WEEKEND (Future)"],
      tips: [
        "Routine: 'At lunchtime I go cycling on the Lucca wall, and I go to the gym twice a week.'",
        "Last Weekend: 'On Saturday I helped my family in Florence, and at night I went out for dinner.'",
        "Next Weekend: 'Next Sunday I will go shopping in Pisa and relax with an aperitivo!'"
      ]
    }
  ];

  const BERNIE_STRUCTURE_TOPICS = [
    {
      topic: "Radio SitRep (Situation Report) 📻",
      framework: "LOCATION & ACCESS • CASUALTIES & HAZARDS • REQUEST & ETA",
      phases: ["1. LOCATION & ACCESS", "2. CASUALTIES & HAZARDS", "3. REQUEST & ETA"],
      tips: [
        "Location & Access: 'Command, this is Bernie at Sector 4. Route 2 is impassable; passable for 4x4 only.'",
        "Casualties & Hazards: 'We have 2 critical Red victims and a confirmed gas leak.'",
        "Request & ETA: 'Requesting heavy rescue and immediate medevac. What is your ETA? Over.'"
      ]
    },
    {
      topic: "USAR Incident Response 🏗️",
      framework: "PERIMETER (SHOULD) • DILEMMA (WOULD) • EXTRICATION",
      phases: ["1. PERIMETER (SHOULD)", "2. DILEMMA (WOULD)", "3. EXTRICATION"],
      tips: [
        "Perimeter (Should): 'We should establish a 50-meter perimeter and keep bystanders clear.'",
        "Dilemma (Would): 'If heavy rescue is delayed, I would stabilize the victim and call for lifting airbags.'",
        "Extrication: 'First locate with the snake camera, then shore with timber, then lift carefully.'"
      ]
    },
    {
      topic: "Psychological First Aid (PFA) Encounter 🤝",
      framework: "ARRIVE & CONNECT • CALM & GROUND • SMALL TASK",
      phases: ["1. ARRIVE & CONNECT", "2. CALM & GROUND", "3. SMALL STRUCTURED TASK"],
      tips: [
        "Arrive & Connect: 'Hello, my name is Bernie. Look at me. I am staying with you.'",
        "Calm & Ground: 'You are safe right now. Breathe slowly with me. Tell me three things you can see.'",
        "Small Task: 'Hold this water with both hands, and please help me write your name on this list.'"
      ]
    },
    {
      topic: "My Dream Weekend / Holiday in Argentina 🇦🇷✨",
      framework: "MORNING • AFTERNOON • EVENING",
      phases: ["1. MORNING (Mate & Chill)", "2. AFTERNOON (Food & Adventure)", "3. EVENING (Music & Rest)"],
      tips: [
        "Morning: 'On my dream weekend, I would wake up late and drink mate in the sun.'",
        "Afternoon: 'I would visit my dad or friends for an asado and walk in nature.'",
        "Evening: 'At night, I would eat something sweet, watch a movie, and relax!'"
      ]
    }
  ];

  const VINH_STRUCTURE_TOPICS = [
    {
      topic: "My Dream Weekend Fishing Trip 🎣",
      framework: "PREP & GEAR • THE CATCH • STORY AFTER",
      phases: ["1. PREP & GEAR", "2. THE BIG CATCH", "3. CAMP / DINNER STORY"],
      tips: [
        "Prep & Gear (60s): Where are you going (Virginia lake, Alaska salmon river, or Vietnam coast), and what lure/rod are you bringing?",
        "The Big Catch (60s): Describe hooking the fish—what happened when it hit the line?",
        "Afterward (60s): Did you catch-and-release or cook it up—and what makes fishing the ultimate reset?"
      ]
    },
    {
      topic: "Time-Travel History Pitch (UK • US • Europe • Vietnam) ⏳",
      framework: "WHERE & WHEN • WHAT YOU SEE • WHY IT MATTERS",
      phases: ["1. WHERE & WHEN", "2. WHAT YOU SEE", "3. WHY IT MATTERS"],
      tips: [
        "Where & When (60s): Pick ONE era (Bạch Đằng River 938, Hội An 1600s, Tulip Mania 1637, or Magna Carta 1215)!",
        "What You See (60s): Describe the sights, sounds, and people around you in vivid English.",
        "Why It Matters (60s): Why was this moment a turning point—and would you survive a week there?"
      ]
    },
    {
      topic: "Sharing Vietnamese History & Culture with US Coworkers 🇻🇳🤝🇺🇸",
      framework: "THE HOOK • THE STORY • THE CONNECTION",
      phases: ["1. THE HOOK", "2. THE STORY", "3. THE CONNECTION"],
      tips: [
        "The Hook (60s): Imagine your new Virginia coworkers ask about Vietnam beyond phở—what historical site or tradition do you introduce first?",
        "The Story (60s): Explain it clearly in 3 steps (e.g., Trưng Sisters, Đông Sơn drums, or Hội An trading port).",
        "The Connection (60s): Connect it to something they'll love (food, coastal fishing, or hospitality!)."
      ]
    }
  ];

  const WEIJING_STRUCTURE_TOPICS = [
    {
      topic: "Semiconductors & AI in 2035: Hype vs. Physical Limits 🧠💻",
      framework: "BREAKTHROUGH • PHYSICAL BOTTLENECK • 2035 PREDICTION",
      phases: ["1. BREAKTHROUGH", "2. PHYSICAL BOTTLENECK", "3. 2035 PREDICTION"],
      tips: [
        "Breakthrough (60s): Where is AI & chip hardware genuinely transforming life right now vs. pure marketing hype?",
        "Physical Bottleneck (60s): What stops chips from scaling forever (heat, power consumption, quantum tunneling, EUV cost)?",
        "2035 Prediction (60s): Make one bold prediction for what computing or smart devices will look like 10 years from now!"
      ]
    },
    {
      topic: "Logic vs. Human Madness in Stock Markets 📈",
      framework: "WHY BUBBLES HAPPEN • COGNITIVE BIAS • SMART RULE",
      phases: ["1. WHY BUBBLES HAPPEN", "2. COGNITIVE BIAS", "3. SMART INVESTOR RULE"],
      tips: [
        "Why Bubbles Happen (60s): Why did even Sir Isaac Newton fall for FOMO in the South Sea Bubble?",
        "Cognitive Bias (60s): Which bias (loss aversion, survivorship bias, herd mentality) trips people up most in investing or work?",
        "Smart Rule (60s): What discipline keeps a rational investor calm when markets panic or overheat?"
      ]
    },
    {
      topic: "One Underrated Scientific Discovery That Built the Modern World ⚗️",
      framework: "BEFORE IT EXISTED • THE MECHANISM • HIDDEN DOWNSIDE",
      phases: ["1. BEFORE IT", "2. HOW IT WORKS", "3. HIDDEN TRADEOFF"],
      tips: [
        "Before It (60s): Pick one discovery (transistors, antibiotics, lithium-ion batteries, or fiber optics) and picture life without it.",
        "How It Works (60s): Explain the core idea in clear, vivid English to a smart non-specialist.",
        "Hidden Tradeoff (60s): Every breakthrough creates a new side effect—what is its biggest unintended consequence?"
      ]
    }
  ];

  function getStructureTopics() {
    if (isWeiJingDeck()) return WEIJING_STRUCTURE_TOPICS;
    if (isVinhDeck()) return VINH_STRUCTURE_TOPICS;
    if (state.deckKey === "abdi") return ABDI_STRUCTURE_TOPICS;
    if (isBernieDeck()) return BERNIE_STRUCTURE_TOPICS;
    if (isGiuliaDeck()) return GIULIA_STRUCTURE_TOPICS;
    return DEFAULT_STRUCTURE_TOPICS;
  }

  const structureModal = $("structureModal");
  const structureTimerEl = $("structureTimer");
  const structureFrameworkBadge = $("structureFrameworkBadge");
  const structureCounterLabel = $("structureCounterLabel");
  const structurePromptEl = $("structurePrompt");
  const structureTipEl = $("structureTip");
  const structurePhasesWrap = $("structurePhases");
  const structurePhaseBtns = [...document.querySelectorAll("#structurePhases .phase-pill")];
  const structureAwardRow = $("structureAwardRow");
  const fillerCountEl = $("fillerCount");

  let structureTopicIdx = 0;
  let structurePhaseIdx = 0;
  let structureInterval = null;
  let structureRemaining = 60;
  let fillerSlips = 0;

  function stopStructureTimer() {
    if (structureInterval) {
      clearInterval(structureInterval);
      structureInterval = null;
    }
  }

  function renderStructureView() {
    stopStructureTimer();
    const topics = getStructureTopics();
    if (structureTopicIdx >= topics.length) structureTopicIdx = 0;
    structureRemaining = 60;
    structureTimerEl.textContent = "60";
    structureTimerEl.classList.remove("danger");

    const item = topics[structureTopicIdx];
    structureFrameworkBadge.textContent = item.framework;
    structureCounterLabel.textContent = `Topic ${structureTopicIdx + 1} of ${topics.length}`;
    structurePromptEl.textContent = item.topic;
    structureTipEl.textContent = item.tips[structurePhaseIdx];

    structurePhaseBtns.forEach((btn, i) => {
      btn.textContent = item.phases[i];
      btn.classList.toggle("active", i === structurePhaseIdx);
      btn.classList.toggle("done", i < structurePhaseIdx);
    });
  }

  function renderStructureAwardButtons() {
    structureAwardRow.innerHTML = "";
    state.players.forEach((player, idx) => {
      const group = document.createElement("div");
      group.className = "award-group";

      const label = document.createElement("span");
      label.className = "award-player-label";
      label.textContent = player.name;

      const phaseBtn = document.createElement("button");
      phaseBtn.type = "button";
      phaseBtn.className = "btn btn-secondary";
      phaseBtn.textContent = "+$150 (Phase)";
      phaseBtn.onclick = () => {
        sfx.open();
        player.score += 150;
        saveState();
        renderScoreboard();
      };

      const cleanBtn = document.createElement("button");
      cleanBtn.type = "button";
      cleanBtn.className = "btn btn-green";
      cleanBtn.textContent = "+$500 (Clean Sprint!)";
      cleanBtn.onclick = () => {
        sfx.correct();
        player.score += 500;
        state.activePlayerIdx = idx;
        saveState();
        renderScoreboard();
      };

      group.append(label, phaseBtn, cleanBtn);
      structureAwardRow.appendChild(group);
    });
  }

  function startStructureTimer() {
    stopStructureTimer();
    structureRemaining = 60;
    structureTimerEl.textContent = "60";
    structureTimerEl.classList.remove("danger");
    sfx.open();

    structureInterval = setInterval(() => {
      structureRemaining -= 1;
      structureTimerEl.textContent = String(structureRemaining);
      if (structureRemaining <= 5 && structureRemaining > 0) {
        structureTimerEl.classList.add("danger");
      }
      if (structureRemaining <= 0) {
        stopStructureTimer();
        structureTimerEl.textContent = "TIME";
        sfx.timeUp();
      }
    }, 1000);
  }

  structurePhaseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      structurePhaseIdx = Number(btn.dataset.phase);
      renderStructureView();
    });
  });

  $("structureBtn").addEventListener("click", () => {
    structurePhaseIdx = 0;
    fillerSlips = 0;
    fillerCountEl.textContent = "0";
    renderStructureView();
    renderStructureAwardButtons();
    structureModal.classList.remove("hidden");
  });

  $("closeStructureBtn").addEventListener("click", () => {
    stopStructureTimer();
    structureModal.classList.add("hidden");
  });

  $("structureStartBtn").addEventListener("click", startStructureTimer);

  $("structureNextPhaseBtn").addEventListener("click", () => {
    structurePhaseIdx = (structurePhaseIdx + 1) % 3;
    renderStructureView();
  });

  $("structureNextTopicBtn").addEventListener("click", () => {
    const topics = getStructureTopics();
    structureTopicIdx = (structureTopicIdx + 1) % topics.length;
    structurePhaseIdx = 0;
    fillerSlips = 0;
    fillerCountEl.textContent = "0";
    renderStructureView();
  });

  $("fillerPlusBtn").addEventListener("click", () => {
    sfx.wrong();
    fillerSlips += 1;
    fillerCountEl.textContent = String(fillerSlips);
  });

  $("fillerResetBtn").addEventListener("click", () => {
    fillerSlips = 0;
    fillerCountEl.textContent = "0";
  });

  // =========================
  // How to Play Modal (Afaan Oromoo - Qubee)
  // =========================
  const howToPlayModal = $("howToPlayModal");
  if ($("howToPlayBtn") && howToPlayModal) {
    $("howToPlayBtn").addEventListener("click", () => {
      sfx.open();
      howToPlayModal.classList.remove("hidden");
    });
  }
  if ($("closeHowToPlayBtn") && howToPlayModal) {
    $("closeHowToPlayBtn").addEventListener("click", () => {
      howToPlayModal.classList.add("hidden");
    });
  }
  if ($("startFromHowToBtn") && howToPlayModal) {
    $("startFromHowToBtn").addEventListener("click", () => {
      sfx.correct();
      howToPlayModal.classList.add("hidden");
    });
  }
  if ($("speakHowToPhraseBtn")) {
    $("speakHowToPhraseBtn").addEventListener("click", () => {
      speakSlowEnglish("Could I have Chemistry and Weird Science for two hundred, please?");
    });
  }

  // Init
  loadState();
  populatePresetSelect();
  updateTranslateLabels();
  timerSelect.value = String(state.timerSeconds);
  soundToggleBtn.textContent = state.soundEnabled ? "🔊 Sound On" : "🔇 Sound Off";
  musicToggleBtn.textContent = state.musicEnabled ? "🎵 Music On" : "🔇 Music Off";
  renderScoreboard();
  renderBoard();
})();
