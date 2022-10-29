import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';



declare var Camera: any;
declare var FaceMesh: any;
@Component({
  selector: 'app-question-screen',
  templateUrl: './question-screen.component.html',
  styleUrls: ['./question-screen.component.css']
})
export class QuestionScreenComponent implements OnInit, AfterViewInit {

  constructor(private applicationService: ApplicationService) { }

  videoElement: any;
  canvasElement: any;
  contextElem: any;
  ngAfterViewInit(): void {
    this.setup();
  }



  setup() {
    this.videoElement = document.querySelector("#cameraInput");
    // navigator.mediaDevices.getUserMedia({ video: true })
    //   .then(this.handleCameraFeed);
    this.canvasElement = document.querySelector("#canvasInput");
    this.contextElem = this.canvasElement.getContext('2d');



    this.startCamera();
  }


  camera: any;

  startCamera() {


    try {

      const faceMesh = new FaceMesh({
        locateFile: (file: any) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
        }
      });

      this.camera = new Camera(this.videoElement, {
        onFrame: async () => {
          await faceMesh.send({ image: this.videoElement });
        },
        width: 1280,
        height: 720
      });

      this.camera.start();

      faceMesh.onResults((res: any) => {
        this.handleResults(res)
      });
    } catch (err) {

    }
  }


  handleResults = (res: any) => {
    console.log(res);
  }

  handleCameraFeed = (res: any) => {
    console.log(res);
    this.videoElement.srcObject = res;

  }

  listOfQuestions: any[] = [];

  questionProgress = {
    a: 0,
    b: 0,
    c: 0,
    total: 0,
    answered: 0,
  };

  ngOnInit(): void {

    this.applicationService.returnListOfQuestions().subscribe((res: any) => {
      console.log(res);
      this.listOfQuestions = res;
      // this.listOfQuestions.forEach((question:any) => {
      // })

      this.questionProgress = {
        a: 0,
        b: 0,
        c: 0,
        total: this.listOfQuestions.length,
        answered: 0,
      }
    })
  }


  makeSelectionGreen(classGiven: any, count: string) {


    let position = classGiven.split("_")[1];

    // @ts-ignore
    console.log(document.querySelector(`.${classGiven}`).style.backgroundColor)
    // @ts-ignore
    if (document.querySelector(`.${classGiven}`).style.backgroundColor != "green") {
      switch (count) {
        case "a":
          // @ts-ignore

          this.questionProgress.a++;



          // @ts-ignore
          document.querySelector(`.b_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.c_${position}`).style.visibility = "hidden";

          break;
        case "b":
          this.questionProgress.b++;
          // @ts-ignore
          document.querySelector(`.a_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.c_${position}`).style.visibility = "hidden";
          break;
        case "c":
          // @ts-ignore
          document.querySelector(`.b_${position}`).style.visibility = "hidden";
          // @ts-ignore
          document.querySelector(`.a_${position}`).style.visibility = "hidden";
          this.questionProgress.c++;
          break;
      }
      this.questionProgress.answered++;

    }
    if (this.questionProgress.answered == this.questionProgress.total) {
      console.log("ANSWERED ALL OF THE QUESTIONS");
      this.proceedFurther();
    }

    // @ts-ignore
    document.querySelector(`.${classGiven}`).style.backgroundColor = "green";

    console.log(this.questionProgress)


  }


  proceedFurther() {

    let percentageComposition;

  }


}
