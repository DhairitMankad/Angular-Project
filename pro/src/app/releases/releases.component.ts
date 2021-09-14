import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Releases } from '../releases';
import { ReleasesService } from '../releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  display = 'none';
  form: FormGroup;
  @Input("releases") releases: any;
  @Output() addreleases=new EventEmitter<any>();
  version: any;


  constructor(
    private _formBuilder: FormBuilder,
    public rs: ReleasesService
    ) {  
      this.releases = [];
      this.form = this._formBuilder.group({
      version: ['', [Validators.required]],
      theme: ['', [Validators.required]],
      components: ['', [Validators.required]],
      performance: ['', [Validators.required]]
    })}

    
    public add(): void{
      this.releases.push(this.form.value)
    }

  ngOnInit(): void {
    console.log('releases................',this.releases);
    this.rs.getReleases().subscribe((response) => {
      this.releases = response;
    });
 }
 Search(){
   if(this.version == ""){
     this.ngOnInit();     
   }
   else
   {
      this.releases = this.releases.filter((res: Releases) => {
        return res.version.toLocaleLowerCase().match(this.version.toLocaleLowerCase());
      })
   }
 }


 openModal() {
  this.display = 'block';
}
// tslint:disable-next-line:typedef
onCloseHandled() {
  this.display = 'none';
}
 
}
