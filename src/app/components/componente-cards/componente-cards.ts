import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ServicioAPI } from '../../services/servicio-api';
import { post } from '../../types/tiposApi';

@Component({
  selector: 'app-componente-cards',
  standalone: false,
  templateUrl: './componente-cards.html',
  styleUrl: './componente-cards.scss'
})
export class ComponenteCards implements OnInit, OnChanges, OnDestroy {
  constructor(private servicio: ServicioAPI){}
  
  posts: post[] = [];

  ngOnInit(): void {
    this.servicio.getPosts().subscribe({
      next: (res) => {
        this.posts = res
      },
      error: () => {},
      complete: () => {} 
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
