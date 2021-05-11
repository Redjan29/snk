document.addEventListener("DOMContentLoaded",()=>{
    console.log(150);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour ouvrir les articles */
        btn_article =document.querySelector(".btn-open")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        
        pub = [
        {
            titre: "Titan Colossal",
            date: `11-05-${date.myDate}`,
            msg: "Le Titan Colossal (超大型巨人, Chō-ōgata Kyojin) est connu pour sa taille incroyable et son contrôle important sur la vapeur émise par son corps qui peut le faire disparaître presque instantanément en se consumant promptement. Il est actuellement en possession d'Armin Arlelt.",
            image: "./asset/colossale.png",
            imoji: "&#128077;"   
        },
        {
            titre: "Titan Machoire",
            date: `11-05-${date.myDate}`,
            msg: "Le Titan Mâchoire (顎の巨人, Agito no Kyojin) a des mâchoires et des ongles férocement puissants. Il est également connu comme l'un des Titans les plus rapides de tous grâce à sa petite taille. Il est actuellement en possession de Falco Gleis.",
            image: "./asset/machoire.png",
            imoji: "&#128077;"   
        },
        {
            titre: "Titan Bestial",
            date: `11-05-${date.myDate}`,
            msg: "Le Titan Bestial (獣の巨人, Kemono no Kyojin), prend une forme animale différente en fonction de son détenteur. Pour Sieg Jäeger il s'agit d'un singe dont la taille s'élève à 17 mètres. On apprend au chapitre 137 que Tom Xaver prenait la forme d'un bélier dont la taille est inférieure à 15 mètres",
            image: "./asset/bestial.png",
            imoji: "&#128077;"   
        }
    ]
    
                article_section = document.querySelector(".article_of");
                stock_article = "";
                for(data of pub){
                    console.log(
                        `${data.titre} ${data.date} ${data.msg} ${data.image} ${data.imoji}`
                    )
                    stock_article += `
                                    <figure>
                                        <img src="${data.image}" alt="image">
                                        <figcaption>
                                            <h2>${data.titre}</h2>
                                            <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                            <p>${data.msg}<span aria-hidden="true">${data.imoji}</span></p>
                                        </figcaption>
                                    </figure>`
                    }
             
                btn_article.addEventListener("click",function(){
                    article_section.innerHTML = stock_article;
                    article_section.classList.toggle("article_on");
                   this.classList.toggle("btn-remove");
                })
        
            })
        