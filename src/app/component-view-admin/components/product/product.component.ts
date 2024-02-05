import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { faAdd, faBackspace, faBackward, faPencil, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formProductSave } from 'src/app/models/model.formProduct';
import { product } from 'src/app/models/model.product';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {


  faIconSearch = faSearch;
  faIconAdd = faAdd;

  isUpdateProduct: boolean = false;

  @Input() productData!: formProductSave;
  @Input() prductDataToUpdate!: formProductSave;

  productToEdit!:product;


  faIconDelte = faTrash;
  faIconUpdate = faPencil;

  erroLoadingProduct: string | null = null;

  ListProduct: product[] = [];
  ListProductsByName: product[] = [];
  currentListProduct: product[] = [];
  nameToSearchsProducts: string = '';

  ngOnInit(): void {
    this.getAll();


  }
  ngOnChanges(): void {
    console.log('Producto', this.productData);
  }

  constructor(private service: ProductService, private cdr: ChangeDetectorRef) { }


  onProductDataReceived(product: formProductSave) {
    this.productData = product;
    console.log('Producto', this.productData);
    this.service.save(this.productData).subscribe(res => {
      if (res) {
        console.log(res);
        Swal.fire('Ok', 'Producto guardado', 'success');
        this.getAll();
      }
    }, (error) => {
      Swal.fire('Error', error, 'error');
      console.log(error);

    });

  }

  onProductDataReceivedToUpdate(product: formProductSave){
    this.prductDataToUpdate = product;
    this.service.updateProduct(product).subscribe(res=> {
      if(res){
        Swal.fire('Ok', 'Producto actualizado', 'success');
        this.getAll();
      }
    }, (error)=> {
      Swal.fire('Error', error, 'error');
      console.log(error);
    });

  }

  getAll() {
    this.service.getAll().subscribe(res => {
      if (res) {
        this.ListProduct = res;
        this.currentListProduct = this.ListProduct;
      }
    },
      (error) => {
        this.erroLoadingProduct = error;
      }
    );
  }

  delete(productId: number) {
    this.service.delete(productId).subscribe(() => {
      Swal.fire('Ok', 'Producto eliminado', 'success');
      this.getAll();
    }, (error) => {
      Swal.fire('Error', error, 'error');
    });
  }

  getProductsByName() {
    this.service.getProductsByName(this.nameToSearchsProducts).subscribe(res => {
      if (res) {
        this.ListProductsByName = res;
        console.log(this.ListProductsByName);
        this.nameToSearchsProducts = '';
      }
    },
      (error) => {
        Swal.fire('Error', error, 'error');
        this.nameToSearchsProducts='';
      });
  }

  emitProductToEdit(product: product){
    this.productToEdit = product;
    this.isUpdateProduct = !this.isUpdateProduct;
  }


  comeBackListProduct(){
    this.ListProductsByName = [];
  }

}



