import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper'
// init Swiper:
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  swiper?: Swiper;
  @ViewChild('') swiperElement: ElementRef | undefined;

  window = window

  constructor(
  ) { }

  ngOnInit() {
  }
  
  swiperReady() {
    this.swiper = this.swiperElement?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }


  toggleProject(index: number): void {
    this.projetos.forEach(element => {
      element.show = false
    });
    
    this.projetos[index].show = true;
    this.selectedProject = this.projetos[index].name;
  }

  selectedProject: string | null = 'wallet-manager';


  swiperSlideChange(e: any) {
    // console.log("changed", e);
  }

  projetos = [
    {
      name: "wallet-manager",
      imagens: [ 
      '/assets/images/wallet-manager/wallet-tablet-celular.png',
      '/assets/images/wallet-manager/wallet-pc.png',],
      tecnologias: ["logo-angular", "logo-ionic", "logo-firebase"],
      descricao: "Aplicativo abrangente desenvolvido para gerenciar suas despesas em diversas carteiras, proporcionando uma experiência aprimorada. Inclui recursos gráficos e categorias que visam otimizar a organização e análise dos seus gastos",
      srcGithub: "",
      srcDeploy: "https://wallet-manager2.netlify.app/home",
      show: true
    },
    {
      name: "controle-estoque",
      imagens: [
        '/assets/images/controle-estoque/controle-estoque.png', 
      ],
      tecnologias: ["logo-angular", "logo-ionic", 'logo-nodejs'],
      srcTecnologias: ['/assets/images/servidor-sql.png'],
      descricao: "Aplicativo projetado para aprimorar minhas habilidades em SQL e NodeJS, ideal para a gestão eficiente de produtos em estoques de diversas empresas. Oferece uma ampla gama de recursos, incluindo diversos filtros e uma poderosa função de pesquisa para facilitar a navegação e a manipulação de dados",
      srcGithub: "https://github.com/T0ntow/Controle-Estoque",
      srcDeploy: "https://controle-estoque-sql.netlify.app/home",
      show: false
    },
    {
      name: "pet-club",
      imagens: [
        '/assets/images/pet/pet-club-pc.png',   
        '/assets/images/pet/login-pet-club.png',   
      ],
      tecnologias: ["logo-angular", "logo-ionic", "logo-firebase", 'logo-nodejs'],
      srcTecnologias: ['/assets/images/servidor-sql.png'],
      descricao: "Aplicativo desenvolvido como projeto final da disciplina de Processos e Desenvolvimento de Sistemas, abrangendo todas as etapas desde a concepção no Figma até a implementação do projeto no VS Code. Essencial para compreender a utilidade dos processos ao longo do caminho até a conclusão",
      srcGithub: "https://github.com/T0ntow/pet-club",
      srcDeploy: "https://pet-club.netlify.app/home",
      show: false
    },
    {
      name: "git-api",
      imagens: [ 
        '/assets/images/github-explorer/git-hub-pc.png',   
      ],
      tecnologias: [],
      descricao: "Aplicativo para enteder o padrão REST das APIs",
      srcGithub: "https://github.com/T0ntow/pet-club",
      srcDeploy: "https://github.com/T0ntow/github-api",
      show: false
    },
    
  ]

}
