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

<<<<<<< HEAD
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number
  nomeCategoria: string = ''
=======
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
>>>>>>> dc6409df6e6228a0af57939084dcc483a05e4e1e


  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if(environment.token == ''){
      this.router.navigate(['entrar'])
    }
<<<<<<< HEAD
    this.findAllCategoria()
    this.findByIdCategoria()

  }


  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
=======
    this.getAllCategorias()
    this.getAllProdutos()
  }

  getAllCategorias() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
>>>>>>> dc6409df6e6228a0af57939084dcc483a05e4e1e
      this.listaCategorias = resp
    })
  }

<<<<<<< HEAD
  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
      this.categoria = resp
=======
  getAllProdutos() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
>>>>>>> dc6409df6e6228a0af57939084dcc483a05e4e1e
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
