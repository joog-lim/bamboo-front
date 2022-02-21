import { AxiosResponse } from "axios";
import RequestApiV2 from "../libs/requestApi";
import { ruleController } from "../libs/requestUrls";

// rule
export interface RuleContent {
    _id: number;
    title: string;
    content: string;
}
  
export interface descriptionRule extends RuleContent {
    description: string[];
}
  
export interface subContentrule extends RuleContent {
    subContent?: Array<RuleContent | descriptionRule | subContentrule>
}

export type rule = subContentrule[];

export type resRuleData = {date: rule};

class Rule {
    getRule(): Promise<void | AxiosResponse> {
        try {
          return RequestApiV2({
            url: ruleController.getRuleUrl(),
          });
        } catch (e: any) {
          throw new Error(e);
        }
    }
}

export default new Rule()