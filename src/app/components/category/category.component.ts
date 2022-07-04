import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Categories } from 'src/app/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories! : Categories[];
  

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }


  getCategories(): void{
    this.categoryService.getCategories().subscribe
    (categories=>{
      this.categories=categories;
      console.log(categories);
    })
  }

}
