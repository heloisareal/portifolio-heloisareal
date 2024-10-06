import { number } from "prop-types";

const aboutItems = [
    {
      label: 'Projetos Desenvolvidos',
      number: 30
    },
    {
      label: 'Anos de Trabalho Voluntário',
      number: 5
    }
  ];

const About = () => {
    return (
        <section
        id="about"
        className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                Olá! Meu nome é Heloísa, tenho 18 anos e estou no segundo semestre do curso de Engenharia de Software. Nos últimos 7 meses, tive a oportunidade de estagiar na FIAP, onde desenvolvi minhas habilidades em TI. Atualmente, estou estagiando na Infinera, uma empresa de redes, onde continuo a aprofundar meu conhecimento em engenharia. Sou apaixonada por tecnologia e sempre estou aberta a novos aprendizados e desafios. Estou animada para contribuir e crescer na área!
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number}, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">
                                            {number}
                                        </span>
                                        <span className="text-rose-400 font-semibold md:text-3xl">
                                            +
                                        </span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/logo.png" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px] "
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About