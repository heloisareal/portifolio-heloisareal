// Importando componentes
import ReviewCard from "./ReviewCard";

// NODE MODULES
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// Registrar GSAP Plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);



const reviews = [
    {
      content: 'É com satisfação que recomendo Heloísa Real, estagiária de TI na FIAP. Durante nosso tempo juntos, ela se destacou pela competência, dedicação e profissionalismo. Heloísa aprendeu rapidamente e aplicou seus conhecimentos de forma eficaz, contribuindo também para o meu desenvolvimento.',
      name: 'Fabrício Bettarello',
      imgSrc: '/images/people-1.jpg',
      company: 'FIAP'
    },
    {
      content: 'É com grande prazer que recomendo minha amiga Heloísa. Estudamos juntos desde o 9º ano e, ao longo desses anos, ele se destacou pela dedicação e colaboração. Sempre disposta a ajudar, Helô tem uma incrível capacidade de aprender e compartilhar conhecimento. Sua atitude positiva e comprometimento fazem dele um grande ativo para qualquer equipe. Tenho plena confiança de que ele será uma valiosa adição em qualquer projeto.',
      name: 'Thiago Baptista',
      imgSrc: '/images/people-2.jpg',
      company: 'Freelancer'
    },
    {
      content: 'Conheci a Helô na FIAP School, onde tive o prazer de colaborar com ela em vários projetos. Durante nosso tempo juntas, pude admirar profundamente sua dedicação e disposição para ajudar sempre que necessário. Como profissional, ela é extremamente esforçada e comprometida em entregar resultados de qualidade. Helô é uma colega de equipe em quem se pode confiar plenamente. Recomendo-a para qualquer projeto ou equipe, sabendo que é uma valiosa contribuição, pronta para enfrentar desafios e alcançar objetivos.',
      name: 'Juliana Barbosa',
      imgSrc: '/images/people-3.jpg',
      company: 'FIAP'
    },
    {
      content: 'É com grande satisfação que recomendo minha amiga Heloísa, que atuou como estagiária de TI na FIAP durante 7 meses. Trabalhar com ela foi uma experiência incrível, repleta de aprendizado e amizade. Heloísa é dedicada, proativa e sempre disposta a ajudar, tornando-a uma valiosa colaboradora. Tenho certeza de que ela fará a diferença em qualquer oportunidade que surgir.',
      name: 'Luisa Santos',
      imgSrc: '/images/people-4.jpg',
      company: 'FIAP'
    },
    {
      content: 'É com prazer que recomendo Heloísa, que estagiou como profissional de TI na FIAP durante 7 meses. Tive a oportunidade de trabalhar com ela e posso afirmar que foi uma experiência incrível, cheia de aprendizado e amizade. Heloísa se destacou pela sua dedicação, criatividade e disposição para colaborar. Tenho certeza de que ela será uma grande adição a qualquer equipe.',
      name: 'Isabella Diaz',
      imgSrc: '/images/people-5.jpg',
      company: 'FIAP'
    },
    {
      content: 'Recomendo Heloísa, com quem trabalhei no estágio na FIAP. Ela é uma profissional excepcional, sempre disposta a ajudar e com excelente conhecimento em TI. Sua ética de trabalho e habilidade de resolver problemas fazem dela uma grande adição a qualquer equipe. Com certeza, ela será um ativo valioso!',
      name: 'Stefani Lopes',
      imgSrc: '/images/people-6.jpg',
      company: 'FIAP'
    }
  ];


const Review = () =>{

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000'
    })
  })

    return(
        <section 
            className="section overflow-hidden"
            id="reviews"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    Indicações e Feedbacks 
                </h2>

                <div className="scrub-slide flex item-strech gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company }, key) =>(
                        <ReviewCard 
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        
                        />
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Review