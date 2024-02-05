import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { formProductSave } from 'src/app/models/model.formProduct';
import { product } from 'src/app/models/model.product';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit, OnChanges {

  @Output() emitterProductData = new EventEmitter<formProductSave>();

  @Output() emiiterProductToUpdate = new EventEmitter<formProductSave>();
  
  @Input() receiveProduct!: product;

  @Input() isUpdateFalse!: boolean;



  formProduct!: FormGroup;

  productEdit!: formProductSave;




  constructor(private formBuilder: FormBuilder) { }


  emitProductData() {
    if(this.formProduct.valid){
      const product = this.formProduct.value;
      this.emitterProductData.emit(product);
    }else{
      Swal.fire('Error', 'Datos invalidos', 'warning');
    }
  }




  ngOnInit() {
    this.formProduct = this.formBuilder.group({
      name: ['', Validators.required],
      categoryId: ['', Validators.required],
      providerId: ['', Validators.required],
      stockProduct: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      expirationDate: ['']
    });

  }

  ngOnChanges(): void {
    console.log(this.isUpdateFalse);
    if(this.receiveProduct){
      console.log(this.receiveProduct);
      this.formProduct.patchValue({
        name:this.receiveProduct.name,
        categoryId: this.receiveProduct.categoryId,
        providerId: this.receiveProduct.providerId,
        stockProduct: this.receiveProduct.stockProduct,
        description: this.receiveProduct.description,
        price: this.receiveProduct.price,
        expirationDate: this.receiveProduct.expirationDate
      });
    }
    
  }

  editProduct(){
    if(this.formProduct.valid){
      this.formProduct.patchValue({
        productId: this.receiveProduct.productId
      })
      this.productEdit = this.formProduct.value;
      this.productEdit.productId = this.receiveProduct.productId;
      this.emiiterProductToUpdate.emit(this.productEdit);
      console.log('Producto a editar',  this.productEdit);
    }else{
      Swal.fire('Error', 'Asegurate que los campos no esten vacios', 'warning');
    }
 }





}
