export interface Poll {
  id: string;
  Event: string;
  Producer: string;
  Date: string;
  SurveyDataList: {
    Item: string;
    Value: string;
  };
}
