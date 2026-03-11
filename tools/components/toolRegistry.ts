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
};