     
     export interface IEducationalDetailsInterface {
         highSchool: IHighSchool;
         higherSecondary:IHigherSecondary;
         graduation: IGraduation;
         postGraduation: IPostGraduation;
}



    export interface IHighSchool {
        schoolName: string;
        fromDate:string;
        toDate: string;
        percentage: string;
    }
      
      export interface IHigherSecondary {
          schoolName: string,
          fromDate:string,
          toDate: string,
          percentage: string;
      }
      //  diploma: new FormArray([]),
          export interface IGraduation {
              collegeName: string;
              courseTitle: string;
              fromDate:string;
              toDate: string;
              percentage: string;
          }

          export interface IPostGraduation {
              collegeName: string;
               courseTitle: string;
               fromDate:string;
               toDate: string;
               percentage: string;
          }

     