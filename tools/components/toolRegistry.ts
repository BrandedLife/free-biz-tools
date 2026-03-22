import type { ComponentType } from "react";
import ProfitMarginCalculator from "@/tools/components/ProfitMarginCalculator";
import MarkupCalculator from "@/tools/components/MarkupCalculator";
import DiscountCalculator from "@/tools/components/DiscountCalculator";
import BreakEvenCalculator from "@/tools/components/BreakEvenCalculator";
import GrossMarginCalculator from "@/tools/components/GrossMarginCalculator";
import ProfitCalculator from "@/tools/components/ProfitCalculator";
import RevenueCalculator from "@/tools/components/RevenueCalculator";
import ShopifyFeeCalculator from "@/tools/components/ShopifyFeeCalculator";
import StripeFeeCalculator from "@/tools/components/StripeFeeCalculator";
import PayPalFeeCalculator from "@/tools/components/PayPalFeeCalculator";
import VatCalculator from "@/tools/components/VatCalculator";
import ProductPriceCalculator from "@/tools/components/ProductPriceCalculator";
import RoasCalculator from "@/tools/components/RoasCalculator";
import ConversionRateCalculator from "@/tools/components/ConversionRateCalculator";
import CacCalculator from "@/tools/components/CacCalculator";
import CpcCalculator from "@/tools/components/CpcCalculator";
import CpmCalculator from "@/tools/components/CpmCalculator";
import LoanPaymentCalculator from "@/tools/components/LoanPaymentCalculator";
import CompoundInterestCalculator from "@/tools/components/CompoundInterestCalculator";
import RoiCalculator from "@/tools/components/RoiCalculator";
import NetProfitCalculator from "@/tools/components/NetProfitCalculator";
import ContributionMarginCalculator from "@/tools/components/ContributionMarginCalculator";
import CostPerUnitCalculator from "@/tools/components/CostPerUnitCalculator";
import TargetProfitCalculator from "@/tools/components/TargetProfitCalculator";
import UnitPriceCalculator from "@/tools/components/UnitPriceCalculator";
import LtvCalculator from "@/tools/components/LtvCalculator";
import MarketingRoiCalculator from "@/tools/components/MarketingRoiCalculator";
import CpmToCpcCalculator from "@/tools/components/CpmToCpcCalculator";
import CpcToCpaCalculator from "@/tools/components/CpcToCpaCalculator";
import ConversionRateImprovementCalculator from "@/tools/components/ConversionRateImprovementCalculator";
import AmazonFbaFeeCalculator from "@/tools/components/AmazonFbaFeeCalculator";
import ShippingProfitCalculator from "@/tools/components/ShippingProfitCalculator";
import InventoryTurnoverCalculator from "@/tools/components/InventoryTurnoverCalculator";
import AverageOrderValueCalculator from "@/tools/components/AverageOrderValueCalculator";
import SalesTaxCalculator from "@/tools/components/SalesTaxCalculator";
import BreakEvenRevenueCalculator from "@/tools/components/BreakEvenRevenueCalculator";
import RevenueGrowthCalculator from "@/tools/components/RevenueGrowthCalculator";
import PriceElasticityCalculator from "@/tools/components/PriceElasticityCalculator";
import PercentageCalculator from "@/tools/components/PercentageCalculator";
import PercentageChangeCalculator from "@/tools/components/PercentageChangeCalculator";
import EmployeeCostCalculator from "@/tools/components/EmployeeCostCalculator";
import HourlyRateCalculator from "@/tools/components/HourlyRateCalculator";
import ContractorRateCalculator from "@/tools/components/ContractorRateCalculator";
import CommissionCalculator from "@/tools/components/CommissionCalculator";
import PaybackPeriodCalculator from "@/tools/components/PaybackPeriodCalculator";
import SaasMrrCalculator from "@/tools/components/SaasMrrCalculator";
import SaasArrCalculator from "@/tools/components/SaasArrCalculator";
import LoanInterestCalculator from "@/tools/components/LoanInterestCalculator";
import InvestmentReturnCalculator from "@/tools/components/InvestmentReturnCalculator";
import AmortizationCalculator from "@/tools/components/AmortizationCalculator";

import BreakEvenUnitsCalculator from "@/tools/components/BreakEvenUnitsCalculator";
import WholesalePriceCalculator from "@/tools/components/WholesalePriceCalculator";
import RetailMarginCalculator from "@/tools/components/RetailMarginCalculator";
import KeystonePricingCalculator from "@/tools/components/KeystonePricingCalculator";
import BundlePricingCalculator from "@/tools/components/BundlePricingCalculator";
import UpsellRevenueCalculator from "@/tools/components/UpsellRevenueCalculator";
import CrossSellRevenueCalculator from "@/tools/components/CrossSellRevenueCalculator";
import SubscriptionPriceCalculator from "@/tools/components/SubscriptionPriceCalculator";
import MinimumProfitablePriceCalculator from "@/tools/components/MinimumProfitablePriceCalculator";
import DesiredMarginPriceCalculator from "@/tools/components/DesiredMarginPriceCalculator";
import PriceIncreaseImpactCalculator from "@/tools/components/PriceIncreaseImpactCalculator";
import ChannelMarginCalculator from "@/tools/components/ChannelMarginCalculator";
import ResellerDiscountCalculator from "@/tools/components/ResellerDiscountCalculator";
import QuoteCalculator from "@/tools/components/QuoteCalculator";
import DealSizeCalculator from "@/tools/components/DealSizeCalculator";
import CpaCalculator from "@/tools/components/CpaCalculator";
import CtrCalculator from "@/tools/components/CtrCalculator";
import ImpressionsCalculator from "@/tools/components/ImpressionsCalculator";
import ClicksCalculator from "@/tools/components/ClicksCalculator";
import LeadToCustomerRateCalculator from "@/tools/components/LeadToCustomerRateCalculator";
import CostPerLeadCalculator from "@/tools/components/CostPerLeadCalculator";
import EmailOpenRateCalculator from "@/tools/components/EmailOpenRateCalculator";
import EmailClickRateCalculator from "@/tools/components/EmailClickRateCalculator";
import UnsubscribeRateCalculator from "@/tools/components/UnsubscribeRateCalculator";
import CartAbandonmentRateCalculator from "@/tools/components/CartAbandonmentRateCalculator";
import RemarketingRoiCalculator from "@/tools/components/RemarketingRoiCalculator";
import LeadValueCalculator from "@/tools/components/LeadValueCalculator";
import FunnelConversionCalculator from "@/tools/components/FunnelConversionCalculator";
import LandingPageConversionCalculator from "@/tools/components/LandingPageConversionCalculator";
import AdFrequencyCalculator from "@/tools/components/AdFrequencyCalculator";
import EcommerceConversionFunnelCalculator from "@/tools/components/EcommerceConversionFunnelCalculator";
import RefundRateCalculator from "@/tools/components/RefundRateCalculator";
import ReturnRateCalculator from "@/tools/components/ReturnRateCalculator";
import NetSalesCalculator from "@/tools/components/NetSalesCalculator";
import MarketplaceFeeCalculator from "@/tools/components/MarketplaceFeeCalculator";
import EtsyFeeCalculator from "@/tools/components/EtsyFeeCalculator";
import EbayFeeCalculator from "@/tools/components/EbayFeeCalculator";
import TikTokShopFeeCalculator from "@/tools/components/TikTokShopFeeCalculator";
import TakealotFeeCalculator from "@/tools/components/TakealotFeeCalculator";
import TemuFeeCalculator from "@/tools/components/TemuFeeCalculator";
import ProductBundleProfitCalculator from "@/tools/components/ProductBundleProfitCalculator";
import ReorderPointCalculator from "@/tools/components/ReorderPointCalculator";
import SafetyStockCalculator from "@/tools/components/SafetyStockCalculator";
import DaysSalesInInventoryCalculator from "@/tools/components/DaysSalesInInventoryCalculator";
import StockoutCostCalculator from "@/tools/components/StockoutCostCalculator";
import InventoryCarryingCostCalculator from "@/tools/components/InventoryCarryingCostCalculator";
import WarehouseSpaceCalculator from "@/tools/components/WarehouseSpaceCalculator";
import FulfillmentCostCalculator from "@/tools/components/FulfillmentCostCalculator";
import PickingPackingCostCalculator from "@/tools/components/PickingPackingCostCalculator";
import OrderFillRateCalculator from "@/tools/components/OrderFillRateCalculator";
import CashFlowCalculator from "@/tools/components/CashFlowCalculator";
import OperatingProfitCalculator from "@/tools/components/OperatingProfitCalculator";
import EbitdaCalculator from "@/tools/components/EbitdaCalculator";
import DepreciationCalculator from "@/tools/components/DepreciationCalculator";
import WorkingCapitalCalculator from "@/tools/components/WorkingCapitalCalculator";
import CurrentRatioCalculator from "@/tools/components/CurrentRatioCalculator";
import QuickRatioCalculator from "@/tools/components/QuickRatioCalculator";
import DebtToEquityCalculator from "@/tools/components/DebtToEquityCalculator";
import InterestCoverageRatioCalculator from "@/tools/components/InterestCoverageRatioCalculator";
import NpvCalculator from "@/tools/components/NpvCalculator";
import IrrCalculator from "@/tools/components/IrrCalculator";
import DiscountRateCalculator from "@/tools/components/DiscountRateCalculator";
import InvoiceDiscountingCalculator from "@/tools/components/InvoiceDiscountingCalculator";
import AccountsReceivableTurnoverCalculator from "@/tools/components/AccountsReceivableTurnoverCalculator";
import AccountsPayableDaysCalculator from "@/tools/components/AccountsPayableDaysCalculator";
import ChurnRateCalculator from "@/tools/components/ChurnRateCalculator";
import SaasLtvCacRatioCalculator from "@/tools/components/SaasLtvCacRatioCalculator";
import ArpuCalculator from "@/tools/components/ArpuCalculator";
import ArpaCalculator from "@/tools/components/ArpaCalculator";
import NetRevenueRetentionCalculator from "@/tools/components/NetRevenueRetentionCalculator";

export const toolRegistry: Record<string, ComponentType> = {
  "profit-margin-calculator": ProfitMarginCalculator,
  "markup-calculator": MarkupCalculator,
  "discount-calculator": DiscountCalculator,
  "break-even-calculator": BreakEvenCalculator,
  "gross-margin-calculator": GrossMarginCalculator,
  "profit-calculator": ProfitCalculator,
  "revenue-calculator": RevenueCalculator,
  "shopify-fee-calculator": ShopifyFeeCalculator,
  "stripe-fee-calculator": StripeFeeCalculator,
  "paypal-fee-calculator": PayPalFeeCalculator,
  "vat-calculator": VatCalculator,
  "product-price-calculator": ProductPriceCalculator,
  "roas-calculator": RoasCalculator,
  "conversion-rate-calculator": ConversionRateCalculator,
  "cac-calculator": CacCalculator,
  "cpc-calculator": CpcCalculator,
  "cpm-calculator": CpmCalculator,
  "loan-payment-calculator": LoanPaymentCalculator,
  "compound-interest-calculator": CompoundInterestCalculator,
  "roi-calculator": RoiCalculator,
  "net-profit-calculator": NetProfitCalculator,
  "contribution-margin-calculator": ContributionMarginCalculator,
  "cost-per-unit-calculator": CostPerUnitCalculator,
  "target-profit-calculator": TargetProfitCalculator,
  "unit-price-calculator": UnitPriceCalculator,
  "ltv-calculator": LtvCalculator,
  "marketing-roi-calculator": MarketingRoiCalculator,
  "cpm-to-cpc-calculator": CpmToCpcCalculator,
  "cpc-to-cpa-calculator": CpcToCpaCalculator,
  "conversion-rate-improvement-calculator": ConversionRateImprovementCalculator,
  "amazon-fba-fee-calculator": AmazonFbaFeeCalculator,
  "shipping-profit-calculator": ShippingProfitCalculator,
  "inventory-turnover-calculator": InventoryTurnoverCalculator,
  "average-order-value-calculator": AverageOrderValueCalculator,
  "sales-tax-calculator": SalesTaxCalculator,
  "break-even-revenue-calculator": BreakEvenRevenueCalculator,
  "revenue-growth-calculator": RevenueGrowthCalculator,
  "price-elasticity-calculator": PriceElasticityCalculator,
  "percentage-change-calculator": PercentageChangeCalculator,
  "employee-cost-calculator": EmployeeCostCalculator,
  "hourly-rate-calculator": HourlyRateCalculator,
  "contractor-rate-calculator": ContractorRateCalculator,
  "commission-calculator": CommissionCalculator,
  "payback-period-calculator": PaybackPeriodCalculator,
  "saas-mrr-calculator": SaasMrrCalculator,
  "saas-arr-calculator": SaasArrCalculator,
  "loan-interest-calculator": LoanInterestCalculator,
  "investment-return-calculator": InvestmentReturnCalculator,
  "amortization-calculator": AmortizationCalculator,
  "percentage-calculator": PercentageCalculator,
  "break-even-units-calculator": BreakEvenUnitsCalculator,
  "wholesale-price-calculator": WholesalePriceCalculator,
  "retail-margin-calculator": RetailMarginCalculator,
  "keystone-pricing-calculator": KeystonePricingCalculator,
  "bundle-pricing-calculator": BundlePricingCalculator,
  "upsell-revenue-calculator": UpsellRevenueCalculator,
  "cross-sell-revenue-calculator": CrossSellRevenueCalculator,
  "subscription-price-calculator": SubscriptionPriceCalculator,
  "minimum-profitable-price-calculator": MinimumProfitablePriceCalculator,
  "desired-margin-price-calculator": DesiredMarginPriceCalculator,
  "price-increase-impact-calculator": PriceIncreaseImpactCalculator,
  "channel-margin-calculator": ChannelMarginCalculator,
  "reseller-discount-calculator": ResellerDiscountCalculator,
  "quote-calculator": QuoteCalculator,
  "deal-size-calculator": DealSizeCalculator,
  "cpa-calculator": CpaCalculator,
  "ctr-calculator": CtrCalculator,
  "impressions-calculator": ImpressionsCalculator,
  "clicks-calculator": ClicksCalculator,
  "lead-to-customer-rate-calculator": LeadToCustomerRateCalculator,
  "cost-per-lead-calculator": CostPerLeadCalculator,
  "email-open-rate-calculator": EmailOpenRateCalculator,
  "email-click-rate-calculator": EmailClickRateCalculator,
  "unsubscribe-rate-calculator": UnsubscribeRateCalculator,
  "cart-abandonment-rate-calculator": CartAbandonmentRateCalculator,
  "remarketing-roi-calculator": RemarketingRoiCalculator,
  "lead-value-calculator": LeadValueCalculator,
  "funnel-conversion-calculator": FunnelConversionCalculator,
  "landing-page-conversion-calculator": LandingPageConversionCalculator,
  "ad-frequency-calculator": AdFrequencyCalculator,
  "ecommerce-conversion-funnel-calculator": EcommerceConversionFunnelCalculator,
  "refund-rate-calculator": RefundRateCalculator,
  "return-rate-calculator": ReturnRateCalculator,
  "net-sales-calculator": NetSalesCalculator,
  "marketplace-fee-calculator": MarketplaceFeeCalculator,
  "etsy-fee-calculator": EtsyFeeCalculator,
  "ebay-fee-calculator": EbayFeeCalculator,
  "tiktok-shop-fee-calculator": TikTokShopFeeCalculator,
  "takealot-fee-calculator": TakealotFeeCalculator,
  "temu-fee-calculator": TemuFeeCalculator,
  "product-bundle-profit-calculator": ProductBundleProfitCalculator,
  "reorder-point-calculator": ReorderPointCalculator,
  "safety-stock-calculator": SafetyStockCalculator,
  "days-sales-in-inventory-calculator": DaysSalesInInventoryCalculator,
  "stockout-cost-calculator": StockoutCostCalculator,
  "inventory-carrying-cost-calculator": InventoryCarryingCostCalculator,
  "warehouse-space-calculator": WarehouseSpaceCalculator,
  "fulfillment-cost-calculator": FulfillmentCostCalculator,
  "picking-packing-cost-calculator": PickingPackingCostCalculator,
  "order-fill-rate-calculator": OrderFillRateCalculator,
  "cash-flow-calculator": CashFlowCalculator,
  "operating-profit-calculator": OperatingProfitCalculator,
  "ebitda-calculator": EbitdaCalculator,
  "depreciation-calculator": DepreciationCalculator,
  "working-capital-calculator": WorkingCapitalCalculator,
  "current-ratio-calculator": CurrentRatioCalculator,
  "quick-ratio-calculator": QuickRatioCalculator,
  "debt-to-equity-calculator": DebtToEquityCalculator,
  "interest-coverage-ratio-calculator": InterestCoverageRatioCalculator,
  "npv-calculator": NpvCalculator,
  "irr-calculator": IrrCalculator,
  "discount-rate-calculator": DiscountRateCalculator,
  "invoice-discounting-calculator": InvoiceDiscountingCalculator,
  "accounts-receivable-turnover-calculator": AccountsReceivableTurnoverCalculator,
  "accounts-payable-days-calculator": AccountsPayableDaysCalculator,
  "churn-rate-calculator": ChurnRateCalculator,
  "saas-ltv-cac-ratio-calculator": SaasLtvCacRatioCalculator,
  "arpu-calculator": ArpuCalculator,
  "arpa-calculator": ArpaCalculator,
  "net-revenue-retention-calculator": NetRevenueRetentionCalculator,
};