
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
            "title": "Shiar, 31",
            "text": "The last time I was in Aleppo was in 2012. Military conscription in Syria is mandatory. When the war started in Daraa almost 5 years ago, I decided to get away for awhile. I’m a Kurd. The military leadership don’t trust the Kurds, so we’re always on the frontline. And if I was captured by ISIS I would be mmediately executed. Either way my chances of survival were slim. Read more: https://caritas.org.nz/newsroom/stories/syrian-refugees-story",
            "approved": 1,
            "country": "Syria"
        },
        {
            "title": "Team Refugee2 Gains International Recognition for Amazing Web Site",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "approved": 0,
            "country": null
        },
        {
            "title": "Gulwali Passarlay, 12",
            "text": "He spent 49 hours with 100 other refugees in a boat designed for 50. Water started to come into the boat, and some people jumped out. He worried that if he drowned, his body would be lost, and his family would never know what had happened to him. “When I see reports of people drowning in the sea, it reminds me of my own story. I still have nightmares, it still keeps me awake. Read more: https://www.theguardian.com/world/2016/jan/26/didnt-think-might-never-see-parents-again-refugee-children-share-their-stories",
            "approved": 1,
            "country": "Afghanistan"
        },
        {
            "title": "Faez al Sharaa, 28",
            "text": "He was walking to work in his hometown of Daraa, the southern Syrian city where the protests against President Bashar al-Assad first erupted. For young civilians like Faez, now 28, leaving the house in the spring of 2013 had become a game of Russian roulette. Dozens were dying each day in the civil war between Assad’s forces and antigovernment insurgents. The ancient farming town of Daraa had become a grisly battlefield. Dissidents had disappeared. Children had been plucked off the streets for suspected anti-government activities, only to be tortured by authorities. Read more: http://time.com/a-syrian-refugee-story/ ",
            "approved": 1,
            "country": "Daraa, Syria"
        },
        {
            "title": "Alia, 7",
            "text": "Alia fled her home in Aleppo, Syria and is currently living in Damour, Lebanon. She shared her story through Gruppo Aleimar, an Italian NGO which provides free, nutritious meals to refugees in the Damour area. Alia is 7 years old. The last thing I remember of Syria, before we left, was when my mother was taking me from our place to our grandparents. The roads were full of dead corpses. I saw dead people with no heads or no hands or legs. I was so shocked I couldn’t stop crying. To calm me down, my grandfather told me they were mean people, but I still prayed for them, because even if some considered them mean, they were still dead human beings. Read more: https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed ",
            "approved": 0,
            "country": "Aleppo, Syria"
        },
        {
            "title": "Bizimana, 7",
            "text": "He fled his home in Rwanda and is now living in Nairobi, Kenya. Bizimana’s story was shared with us by Refugees International Japan, which focuses on the health, education and economic livelihoods of people displaced by conflict around the world. Bizimana was two years old when his family had to flee the Rwandan genocide to Burundi. From there he moved to camps in Tanzania and now lives in Nairobi, Kenya. He received business start-up training and has established a business that has grown so fast he is now able to start a cafe service. He is also a prize-winning singer. Read more: https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed ",
            "approved": 0,
            "country": "Rwanda"
        },
        {
            "title": "Yoon Ha",
            "text": "When I was asked, “How was your life in North Korea?” for the first time, I just started crying because my life there was so hard. It was so hard. When I was a little kid my mom left me, my younger sister, and my dad, because of our financial struggles. I felt so abandoned and unloved.. Read more: https://www.libertyinnorthkorea.org/yoon-story-part-1-life-north-korea/ ",
            "approved": 0,
            "country": "Rwanda"
        }
    ]
    )});
    };
