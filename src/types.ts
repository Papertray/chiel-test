export interface SamsungRequest {
  response: Response;
}

export interface Response {
  resultData:    ResultData;
  siteCode:      string;
  statusCode:    number;
  statusMessage: string;
}

export interface ResultData {
  productList: ProductList[];
}

export interface ProductList {
  awardList:              AwardList[];
  categorySubTypeCode:    string;
  categorySubTypeEngName: string;
  chipOptions:            ChipOption[] | null;
  familyId:               string;
  familyRecord:           string;
  filterParamText:        null;
  fmyEngName:             string;
  fmyMarketingName:       string;
  iaCtaDisplay:           IaCtaDisplay;
  isRecommended:          null;
  localBenefitList:       LocalBenefitList[];
  modelCount:             string;
  modelList:              ModelList[];
  oldProductYN:           IaCtaDisplay;
  optionPriceUse:         null;
  productGroupId:         string;
  quickLooks:             any[];
  simplePdYN:             IaCtaDisplay;
  thirdPASeller:          null;
  wtbDispFuncUseYN:       null;
  wtbOnlineDispFuncUseYN: null;
}

export interface AwardList {
  awardDesc:  string;
  awardImg:   string;
  awardLink:  null | string;
  awardTitle: string;
  awardType:  string;
  overlayYN:  IaCtaDisplay;
}

export enum IaCtaDisplay {
  N = "N",
  Y = "Y",
}

export interface ChipOption {
  fmyChipType: FmyChipType;
  optionList:  OptionList[];
}

export enum FmyChipType {
  Color = "COLOR",
  MobileMemory = "MOBILE MEMORY",
  TvSize = "TV SIZE",
}

export interface OptionList {
  multiColorList:  null;
  multiColorYN:    IaCtaDisplay;
  optionCode:      string;
  optionLocalName: string;
  optionName:      string;
}

export interface LocalBenefitList {
  localBenefitIconType:   LocalBenefitIconType;
  localBenefitImgAltText: LocalBenefitImgAltText;
  localBenefitText:       string;
}

export enum LocalBenefitIconType {
  Finance = "finance",
  RepairSupport = "repair_support",
  Shipping = "shipping",
}

export enum LocalBenefitImgAltText {
  Finance = "Finance",
  FreeInstallation = "Free installation",
  Shipping = "Shipping",
}

export interface ModelList {
  bespokeCtaLink:           null;
  bespokeCtaUse:            IaCtaDisplay;
  buyBackDesc:              null;
  buyingConfigLink:         null;
  buyingConfigLinkType:     null;
  configuratorUrl:          ConfiguratorURL | null;
  configuratorUseYn:        IaCtaDisplay;
  ctaEngText:               CtaEngText | null;
  ctaLocalText:             CtaLocalText | null;
  ctaType:                  CtaType;
  deliveryYN:               IaCtaDisplay;
  displayName:              string;
  emiCalculatorUrl:         null;
  energyFileUrl:            null | string;
  energyLabelClass1:        null | string;
  energyLabelClass2:        null;
  energyLabelGrade:         null | string;
  ficheFileUrl:             null | string;
  financeInfoAmount:        null;
  financeInfoValue:         null;
  financing:                IaCtaDisplay | null;
  financingDesc:            null;
  financingFormattedDesc:   null;
  fmyChipList:              FmyChipList[];
  galleryImage:             string[];
  galleryImageAlt:          string[];
  tariffYN:                 IaCtaDisplay;
  keySpec:                  null;
  repairabilityIndex:       null;
  repairabilityIndexPdfUrl: null;
  stockStatusText:          CtaType | null;
  reviewCount:              string;
  lowestWasPrice:           null | string;
  tradeIn:                  IaCtaDisplay | null;
  tradeInDesc:              null;
  tradeInFormattedDesc:     null;
  premiumCare:              IaCtaDisplay | null;
  premiumCareDesc:          null;
  premiumCareFormattedDesc: null;
  ratings:                  string;
  newEnergyLabel:           IaCtaDisplay | null;
  selected:                 IaCtaDisplay;
  upgrade:                  IaCtaDisplay | null;
  upgradeDesc:              null;
  pdpUrl:                   string;
  pf360IconUse:             IaCtaDisplay;
  usp:                      string[];
  leasingInfo:              null;
  price:                    null | string;
  priceDisplay:             null | string;
  promotionPrice:           null | string;
  promotionPriceDisplay:    null | string;
  pricePeriodInfo:          null;
  listPrice:                null;
  listPriceDisplay:         null;
  pviSubtypeName:           PviSubtypeName;
  tradeInPriceText:         null;
  modelName:                string;
  tradeInDiscount:          null;
  tradeInPrice:             null;
  msrpPrice:                null | string;
  vatEligible:              null;
  vatFreePrice:             null;
  vatFreePriceDisplay:      null;
  monthlyPriceInfo:         MonthlyPriceInfo | null;
  topFlags:                 null;
  storePromotions:          StorePromotion[] | null;
  keySummary:               null;
  thumbUrl:                 string;
  pviTypeName:              PviTypeName;
  saveText:                 null | string;
  upgradeFormattedDesc:     null;
  marketingpdpYN:           IaCtaDisplay;
  originPdpUrl:             string;
  shopSKU:                  string;
  modelCode:                string;
  offerCtaFlag:             IaCtaDisplay | null;
  galleryImageLarge:        string[];
  thumbUrlAlt:              string;
  merchandisingText:        null | string;
  uspText:                  null;
  reviewUrl:                string;
  lowestWasPriceDisplay:    null;
  packageYN:                IaCtaDisplay;
  pkgChildModelList:        null;
  wtbUseFlag:               IaCtaDisplay;
}

export enum ConfiguratorURL {
  NlSmartphonesGalaxyZFlip4Buy = "/nl/smartphones/galaxy-z-flip4/buy/",
  NlSmartphonesGalaxyZFold4Buy = "/nl/smartphones/galaxy-z-fold4/buy/",
  NlTabletsGalaxyTabS8Buy = "/nl/tablets/galaxy-tab-s8/buy/",
}

export enum CtaEngText {
  BuyNow = "Buy now",
  CtaEngTextBuyNow = "Buy now ",
}

export enum CtaLocalText {
  KoopNu = "Koop nu",
}

export enum CtaType {
  InStock = "inStock",
  LearnMore = "learnMore",
  OutOfStock = "outOfStock",
}

export interface FmyChipList {
  fmyChipCode:      string;
  fmyChipLocalName: string;
  fmyChipName:      string;
  fmyChipType:      FmyChipType;
  multiColorList:   null;
  multiColorYN:     IaCtaDisplay;
}

export interface MonthlyPriceInfo {
  interest:       string;
  leasingMonthly: string;
  leasingMonths:  string;
  leasingUpfront: string;
}

export enum PviSubtypeName {
  Qled = "QLED",
  Smartphone = "Smartphone",
  Soundbar = "Soundbar",
  Tablet = "Tablet",
  Wearable = "Wearable",
}

export enum PviTypeName {
  HomeAudio = "Home Audio",
  Mobile = "Mobile",
  Tv = "TV",
}

export interface StorePromotion {
  promotionFormattedText: null;
  promotionImgType:       PromotionImgType;
  promotionText:          PromotionText;
}

export enum PromotionImgType {
  Undefined = "undefined",
}

export enum PromotionText {
  Met100ExtraInruilwaarde = "Met €100 extra inruilwaarde ",
  The10VoordeelOp3ProductenOf5VoordeelBij2 = "10% voordeel op 3 producten. Of 5% voordeel bij 2.",
  The50VoordeelOpKeyboardCover = "50% voordeel op Keyboard Cover",
}
