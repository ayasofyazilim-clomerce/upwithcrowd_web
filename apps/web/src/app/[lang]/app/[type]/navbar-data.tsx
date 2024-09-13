import type { NavbarItemType } from "@repo/ui/theme/types";
import type { AbpUiNavigationResource } from "src/language-data/AbpUiNavigation";

const navbarDataFromDB: NavbarItemType[] = [
  {
    key: "/",
    displayName: "Home",
    description: "Description",
    href: "",
    icon: "home",
    parentNavbarItemKey: null,
    subNavbarItems: [
      {
        key: "dashboard",
        displayName: "Dashboard",
        description: "Description",
        href: "dashboard/openiddict/applications",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: [
          {
            key: "dashboard/openiddict",
            displayName: "Open Id Dict",
            description: "Description",
            href: "dashboard/openiddict/applications",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/openiddict/applications",
                displayName: "Applications",
                description: "Description",
                href: "dashboard/openiddict/applications",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/openiddict",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/openiddict/scopes",
                displayName: "Scopes",
                description: "Description",
                href: "dashboard/openiddict/scopes",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/openiddict",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "dashboard/admin",
            displayName: "Admin Management",
            description: "Description",
            href: "dashboard/admin/languages",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/admin/languages",
                displayName: "Languages",
                description: "Description",
                href: "dashboard/admin/languages",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/admin",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/admin/languageTexts",
                displayName: "Language Texts",
                description: "Description",
                href: "dashboard/admin/languageTexts",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/admin",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "dashboard/saas",
            displayName: "Saas Management",
            description: "Description",
            href: "dashboard/saas/edition",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/saas/edition",
                displayName: "Edition",
                description: "Description",
                href: "dashboard/saas/edition",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/saas",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/saas/tenant",
                displayName: "Tenant",
                description: "Description",
                href: "dashboard/saas/tenant",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/saas",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "dashboard/identity",
            displayName: "Identity Management",
            description: "Description",
            href: "dashboard/identity/role",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/identity/role",
                displayName: "Role",
                description: "Description",
                href: "dashboard/identity/role",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/identity",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/identity/user",
                displayName: "User",
                description: "Description",
                href: "dashboard/identity/user",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/identity",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/identity/claimType",
                displayName: "Claim Type",
                description: "Description",
                href: "dashboard/identity/claimType",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/identity",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/identity/securityLogs",
                displayName: "Security Logs",
                description: "Description",
                href: "dashboard/identity/securityLogs",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/identity",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "dashboard/identity/organization",
                displayName: "Organization",
                description: "Description",
                href: "dashboard/identity/organization",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/identity",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "dashboard/auditLogs",
            displayName: "Audit Logs",
            description: "Description",
            href: "dashboard/auditLogs/auditLogs",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/auditLogs",
                displayName: "Audit Logs",
                description: "Description",
                href: "dashboard/auditLogs/auditLogs",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/auditLogs",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "dashboard/textTemplates",
            displayName: "Text Templates",
            description: "Description",
            href: "dashboard/textTemplates/textTemplates",
            icon: "dashboard",
            parentNavbarItemKey: "dashboard",
            subNavbarItems: [
              {
                key: "dashboard/textTemplates",
                displayName: "Text Templates",
                description: "Description",
                href: "dashboard/textTemplates/textTemplates",
                icon: "dashboard",
                parentNavbarItemKey: "dashboard/textTemplates",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
        ],
        displayOrder: 1,
      },
      {
        key: "management",
        displayName: "Management",
        description: "Description",
        href: "management/setting/vats",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: [
          {
            key: "management/setting",
            displayName: "VAT Settings",
            description: "Description",
            href: "management/setting/vats",
            icon: "dashboard",
            parentNavbarItemKey: "management",
            subNavbarItems: [
              {
                key: "management/setting/vats",
                displayName: "VAT",
                description: "Description",
                href: "management/setting/vats",
                icon: "dashboard",
                parentNavbarItemKey: "management/setting",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "management/setting/productGroups",
                displayName: "Product Group",
                description: "Description",
                href: "management/setting/productGroups",
                icon: "dashboard",
                parentNavbarItemKey: "management/setting",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "management/setting/productGroupsVats",
                displayName: "Product Group VAT",
                description: "Description",
                href: "management/setting/productGroupsVats",
                icon: "dashboard",
                parentNavbarItemKey: "management/setting",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "management/tenant-settings",
            displayName: "Tenant Settings",
            description: "Description",
            href: "management/tenant-settings",
            icon: "dashboard",
            parentNavbarItemKey: "management",
            subNavbarItems: null,
            displayOrder: 1,
          },
        ],
        displayOrder: 1,
      },
      {
        key: "crm",
        displayName: "CRM",
        description: "Description",
        href: "crm/setting/vats",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: [
          {
            key: "crm/companies",
            displayName: "Companies",
            description: "Description",
            href: "crm/companies/merchants",
            icon: "dashboard",
            parentNavbarItemKey: "crm",
            subNavbarItems: [
              {
                key: "crm/companies/merchants",
                displayName: "Merchants",
                description: "Description",
                href: "crm/companies/merchants",
                icon: "dashboard",
                parentNavbarItemKey: "crm/companies",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "crm/companies/refundPoints",
                displayName: "Refund Points",
                description: "Description",
                href: "crm/companies/refundPoints",
                icon: "dashboard",
                parentNavbarItemKey: "crm/companies",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "crm/companies/customs",
                displayName: "Customs",
                description: "Description",
                href: "crm/companies/customs",
                icon: "dashboard",
                parentNavbarItemKey: "crm/companies",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "crm/companies/taxFree",
                displayName: "Tax Free",
                description: "Description",
                href: "crm/companies/taxFree",
                icon: "dashboard",
                parentNavbarItemKey: "crm/companies",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "crm/companies/taxOffices",
                displayName: "Tax Offices",
                description: "Description",
                href: "crm/companies/taxOffices",
                icon: "dashboard",
                parentNavbarItemKey: "crm/companies",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
        ],
        displayOrder: 1,
      },
      {
        key: "traveller",
        displayName: "Traveller",
        description: "Description",
        href: "traveller",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: null,
        displayOrder: 1,
      },
      {
        key: "contracts",
        displayName: "Contracts",
        description: "Description",
        href: "contracts/contracts",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: [
          {
            key: "contracts/contracts",
            displayName: "Contracts",
            description: "Description",
            href: "contracts/contracts",
            icon: "dashboard",
            parentNavbarItemKey: "contracts",
            subNavbarItems: null,
            displayOrder: 1,
          },
          {
            key: "contracts/rebate",
            displayName: "Rebate",
            description: "Description",
            href: "contracts/rebate/company-settings",
            icon: "dashboard",
            parentNavbarItemKey: "contracts",
            subNavbarItems: [
              {
                key: "contracts/rebate/company-settings",
                displayName: "Company Settings",
                description: "Description",
                href: "contracts/rebate/company-settings",
                icon: "dashboard",
                parentNavbarItemKey: "contracts/rebate",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "contracts/rebate/templates",
                displayName: "Templates",
                description: "Description",
                href: "contracts/rebate/templates",
                icon: "dashboard",
                parentNavbarItemKey: "contracts/rebate",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
          {
            key: "contracts/refund",
            displayName: "Refund",
            description: "Description",
            href: "contracts/refund/refund-tables",
            icon: "dashboard",
            parentNavbarItemKey: "contracts",
            subNavbarItems: [
              {
                key: "contracts/refund/refund-tables",
                displayName: "Refund Tables",
                description: "Description",
                href: "contracts/refund/refund-tables",
                icon: "dashboard",
                parentNavbarItemKey: "contracts/refund",
                subNavbarItems: null,
                displayOrder: 1,
              },
              {
                key: "contracts/refund/refund-fees",
                displayName: "Refund Fees",
                description: "Description",
                href: "contracts/refund/refund-fees",
                icon: "dashboard",
                parentNavbarItemKey: "contracts/refund",
                subNavbarItems: null,
                displayOrder: 1,
              },
            ],
            displayOrder: 1,
          },
        ],
        displayOrder: 1,
      },
      {
        key: "operations",
        displayName: "Operations",
        description: "Description",
        href: "operations/details",
        icon: "dashboard",
        parentNavbarItemKey: null,
        subNavbarItems: [
          {
            key: "operations/details",
            displayName: "Tax Free Tags",
            description: "Description",
            href: "operations/details",
            icon: "dashboard",
            parentNavbarItemKey: "operations",
            subNavbarItems: null,
            displayOrder: 1,
          },
        ],
        displayOrder: 1,
      },
    ],
    displayOrder: 1,
  },
];
export function getNavbarFromDB(
  prefix: string,
  languageData: AbpUiNavigationResource,
) {
  function processItems(items: NavbarItemType[]) {
    items.forEach((item) => {
      item.href = `${prefix}/${item.href}`;
      if (item.key !== "/") {
        item.key = `${prefix}/${item.key}`;
      }

      //İleride displayname'in veritabanından çevrili gelmiş olmasını bekliyoruz.
      item.displayName =
        languageData[
          (
            item.displayName[0].toUpperCase() + item.displayName.slice(1)
          ).replaceAll(" ", "") as keyof typeof languageData
        ] || `**${item.displayName}`;
      if (item.subNavbarItems) {
        processItems(item.subNavbarItems);
      }
    });
  }

  processItems(navbarDataFromDB);
  return navbarDataFromDB;
}
