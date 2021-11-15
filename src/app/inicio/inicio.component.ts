import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/User';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  curso: string
  descricao: string
  preco: number

  usuario: Usuario = new Usuario()
  idUsuario = environment.id


  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['entrar'])
    }
    this.getAllCategorias()
    this.getAllProdutos()
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  publicar() {

    //this.categoria.id = this.idCategoria
    //this.produto.categoria = this.categoria
    //this.usuario.id = this.idUsuario
    //this.produto.usuario = this.usuario

    this.produto.curso = this.curso

    this.produto.descricao = this.descricao

    this.produto.preco = this.preco

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
    })
  }
}
