export const siteTableData = {
    keys: ["code", "name", "region", "consultancy", "client", "projects", "users", "client_users", "comments", "created_at", "updated_at"],
    config: {
        code: {
            isVisible: true,
            label: "Site Code",
            class: "",
            searchKey: "sites.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Site Name",
            class: "reg-name",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "client-wid",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        projects: {
            isVisible: true,
            label: "Associated Projects",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        region: {
            isVisible: true,
            label: "Region",
            class: "",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "region",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "assigned_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        client_users: {
            isVisible: true,
            label: "Client Users",
            class: "",
            searchKey: "client_users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client_users",
            commonSearchKey: "client_users",
            commonSearchObjectKey: "name"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "sites.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "sites.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "sites.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const regionTableData = {
    keys: ["code", "name", "consultancy", "client", "projects", "users", "client_users", "comments", "created_at", "updated_at"],
    config: {
        code: {
            isVisible: true,
            label: "Region Code",
            class: "",
            searchKey: "regions.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Region Name",
            class: "reg-name",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "client-wid",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        projects: {
            isVisible: true,
            label: "Associated Projects",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancy_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        client_users: {
            isVisible: true,
            label: "Client Users",
            class: "",
            searchKey: "client_users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client_users",
            commonSearchKey: "client_users",
            commonSearchObjectKey: "name"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "regions.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "regions.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "regions.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const projectTableData = {
    keys: ["code", "name", "consultancy", "client", "regions", "sites", "users", "client_users", "comments", "created_at", "updated_at"],
    config: {
        code: {
            isVisible: true,
            label: "Project Code",
            class: "",
            searchKey: "projects.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Project Name",
            class: "reg-name",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "client-wid",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        regions: {
            isVisible: true,
            label: "Regions",
            class: "region-wid",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "regions",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        sites: {
            isVisible: true,
            label: "Sites",
            class: "region-wid",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "sites",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancy_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        client_users: {
            isVisible: true,
            label: "Client Users",
            class: "",
            searchKey: "client_users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client_users",
            commonSearchKey: "client_users",
            commonSearchObjectKey: "name"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "projects.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "projects.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "projects.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const buildingTypeTableData = {
    keys: ["name", "client", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "reg-name",
            searchKey: "main_building_types.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "main_building_types",
            commonSearchKey: "main_building_types",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "main_building_types.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "main_building_types",
            commonSearchKey: "main_building_types",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "main_building_types.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "main_building_types",
            commonSearchKey: "main_building_types",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "main_building_types.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "main_building_types",
            commonSearchKey: "main_building_types",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const projectSettingsBuildingTypeTableData = {
    keys: [
        "name",
        "site_fc_dm_efci",
        "listed_in_fc_site",
        "listed_in_dm_site",
        "give_in_fc_site",
        "receive_in_fc_site",
        "give_in_dm_site",
        "receive_in_dm_site",
        "listed_in_site_efci",
        "has_own_efci"
    ],
    config: {
        name: { isVisible: true, label: "Building Type", class: "build-add" },
        site_fc_dm_efci: {
            isVisible: true,
            label: "Is Part of Site FC/DM/EFCI",
            class: "fy-dtl"
        },
        listed_in_fc_site: { isVisible: true, label: "Listed in FC Site Table", class: "fy-dtl" },
        listed_in_dm_site: { isVisible: true, label: "Listed in DM Site Table", class: "fy-dtl" },
        give_in_fc_site: {
            isVisible: true,
            label: "Give to other Buildings in FC Site Table",
            class: "fy-dtl"
        },
        receive_in_fc_site: {
            isVisible: true,
            label: "Receive from other Buildings in FC Site Table",
            class: "fy-dtl"
        },
        give_in_dm_site: {
            isVisible: true,
            label: "Give to other Buildings in DM Site Table",
            class: "fy-dtl"
        },
        receive_in_dm_site: {
            isVisible: true,
            label: "Receive from other Buildings in DM Site Table",
            class: "fy-dtl"
        },
        has_own_efci: { isVisible: true, label: "Has own EFCI View", class: "fy-dtl" },
        listed_in_site_efci: {
            isVisible: true,
            label: "Listed/Rolled-Up to Site EFCI View",
            class: "fy-dtl"
        }
    },
    data: []
};

export const buildingTableData = {
    keys: [
        "code",
        "name",
        "building_type",
        "consultancy",
        "client",
        "region",
        "site",
        "description",
        "number",
        "projects",
        "users",
        "client_users",
        "area",
        "cost",
        "enterprise_index",
        "ownership",
        "ownership_type",
        "use",
        "manager",
        "year",
        "ministry",
        "street",
        "city",
        "state",
        "zip_code",
        "country",
        "comments",
        "created_at",
        "updated_at"
    ],
    config: {
        code: {
            isVisible: true,
            label: "Building Code",
            class: "",
            searchKey: "buildings.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Building Name",
            class: "",
            searchKey: "buildings.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "name"
        },
        building_type: {
            isVisible: true,
            label: "Type",
            class: "",
            searchKey: "main_building_types.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "main_building_type",
            commonSearchKey: "main_building_types",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "client-wid",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        region: {
            isVisible: true,
            label: "Region",
            class: "",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "region",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        site: {
            isVisible: true,
            label: "Site",
            class: "",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "site",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "buildings.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "description"
        },
        number: {
            isVisible: true,
            label: "Building Number",
            class: "",
            searchKey: "buildings.number",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "number"
        },
        projects: {
            isVisible: true,
            label: "Associated Projects",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "cons-user",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "assigned_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        client_users: {
            isVisible: true,
            label: "Client Users",
            class: "",
            searchKey: "client_users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "client_users",
            commonSearchKey: "client_users",
            commonSearchObjectKey: "name"
        },
        area: {
            isVisible: true,
            label: "Area (Sq Ft)",
            class: "",
            searchKey: "buildings.area",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "area"
        },
        cost: {
            isVisible: true,
            label: "Cost",
            class: "",
            searchKey: "buildings.cost",
            type: "number",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "cost"
        },
        enterprise_index: {
            isVisible: true,
            label: "Enterprise Index",
            class: "",
            searchKey: "buildings.enterprise_index",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "enterprise_index"
        },
        ownership: {
            isVisible: true,
            label: "Ownership",
            class: "clent",
            searchKey: "buildings.ownership",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "ownership"
        },
        ownership_type: {
            isVisible: true,
            label: "Ownership Type",
            class: "",
            searchKey: "buildings.ownership_type",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "ownership_type"
        },
        use: {
            isVisible: true,
            label: "Use",
            class: "",
            searchKey: "buildings.use",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "use"
        },
        manager: {
            isVisible: true,
            label: "Manager",
            class: "",
            searchKey: "buildings.manager",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "manager"
        },
        year: {
            isVisible: true,
            label: "Year Built",
            class: "",
            searchKey: "buildings.year",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "year"
        },
        ministry: {
            isVisible: true,
            label: "Ministry",
            class: "",
            searchKey: "buildings.ministry",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "ministry"
        },
        street: {
            isVisible: true,
            label: "Street",
            class: "",
            searchKey: "buildings.street",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "street"
        },
        city: {
            isVisible: true,
            label: "City",
            class: "",
            searchKey: "buildings.city",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "city"
        },
        state: {
            isVisible: true,
            label: "State",
            class: "",
            searchKey: "buildings.state",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "state"
        },
        zip_code: {
            isVisible: true,
            label: "ZipCode",
            class: "",
            searchKey: "buildings.zip_code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "zip_code"
        },
        country: {
            isVisible: true,
            label: "Country",
            class: "",
            searchKey: "buildings.country",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "country"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "buildings.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "buildings.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "buildings.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "buildings",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const floorTableData = {
    keys: ["code", "name", "building", "client", "consultancy", "region", "site", "users", "client_users", "comments", "created_at", "updated_at"],
    config: {
        code: {
            isVisible: true,
            label: "Floor Code",
            class: "",
            searchKey: "floor.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "floors",
            commonSearchKey: "floors",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Floor Name",
            class: "",
            searchKey: "floors.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "floors",
            commonSearchKey: "floors",
            commonSearchObjectKey: "name"
        },
        building: {
            isVisible: true,
            label: "Building",
            class: "",
            searchKey: "buildings.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "building",
            commonSearchKey: "buildings",
            commonSearchObjectKey: "name"
        },

        client: {
            isVisible: true,
            label: "Client",
            class: "client-wid",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        region: {
            isVisible: true,
            label: "Region",
            class: "",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "region",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        site: {
            isVisible: true,
            label: "Site",
            class: "",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "site",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "cons-user",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "assigned_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        client_users: {
            isVisible: true,
            label: "Client Users",
            class: "",
            searchKey: "client_users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client_users",
            commonSearchKey: "client_users",
            commonSearchObjectKey: "name"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "floors.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "floors",
            commonSearchKey: "floors",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "floors.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "floors",
            commonSearchKey: "floors",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "floors.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "floors",
            commonSearchKey: "floors",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const tradesettingsTableData = {
    keys: ["name", "project", "client", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "trades.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "trades",
            commonSearchKey: "trades",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "trades.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "trades",
            commonSearchKey: "trades",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "trades.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "trades",
            commonSearchKey: "trades",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "trades.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "trades",
            commonSearchKey: "trades",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const futureCapitalTableData = {
    keys: ["name", "2022", "FY2", "FY3", "FY4", "FY5", "FY6", "Total"],
    config: {
        name: { isVisible: true, label: "Building/Addition", class: "" },
        2022: { isVisible: true, label: "2022", class: "" },
        FY2: { isVisible: true, label: "FY2", class: "" },
        FY3: { isVisible: true, label: "FY3", class: "" },
        FY4: { isVisible: true, label: "FY4", class: "" },
        FY5: { isVisible: true, label: "FY5", class: "" },
        FY6: { isVisible: true, label: "FY6", class: "" },
        Total: { isVisible: true, label: "Total", class: "" }
    },
    data: []
};

export const categorysettingsTableData = {
    keys: ["name", "project", "client", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "categories.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "categories",
            commonSearchKey: "categories",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "categories.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "categories",
            commonSearchKey: "categories",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "categories.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "categories",
            commonSearchKey: "categories",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "categories.updated_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "categories",
            commonSearchKey: "categories",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const differedMaintenanceTableData = {
    keys: ["name", "2022", "FY2", "FY3", "FY4", "FY5", "FY6", "Total"],
    config: {
        name: { isVisible: true, label: "Building/Addition", class: "" },
        2022: { isVisible: true, label: "2022", class: "" },
        FY2: { isVisible: true, label: "FY2", class: "" },
        FY3: { isVisible: true, label: "FY3", class: "" },
        FY4: { isVisible: true, label: "FY4", class: "" },
        FY5: { isVisible: true, label: "FY5", class: "" },
        FY6: { isVisible: true, label: "FY6", class: "" },
        Total: { isVisible: true, label: "Total", class: "" }
    },
    data: []
};

export const systemsettingsTableData = {
    keys: ["name", "project", "client", "trades", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "systems.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "systems",
            commonSearchKey: "systems",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        trades: {
            isVisible: true,
            label: "Trade",
            class: "",
            searchKey: "trades.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "trade",
            commonSearchKey: "trades",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "systems.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "systems",
            commonSearchKey: "systems",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "systems.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "systems",
            commonSearchKey: "systems",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "systems.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "systems",
            commonSearchKey: "systems",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const subsystemsettingsTableData = {
    keys: ["name", "project", "client", "trades", "systems", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "sub_systems.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sub_systems",
            commonSearchKey: "sub_systems",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        trades: {
            isVisible: true,
            label: "Trade",
            class: "",
            searchKey: "trades.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "trade",
            commonSearchKey: "trades",
            commonSearchObjectKey: "name"
        },
        systems: {
            isVisible: true,
            label: "System",
            class: "",
            searchKey: "systems.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "system",
            commonSearchKey: "systems",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "sub_systems.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sub_systems",
            commonSearchKey: "sub_systems",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "sub_systems.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sub_systems",
            commonSearchKey: "sub_systems",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "sub_systems.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "sub_systems",
            commonSearchKey: "sub_systems",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const departmentsettingsTableData = {
    keys: ["name", "project", "client", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "departments.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "departments",
            commonSearchKey: "departments",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "departments.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "departments",
            commonSearchKey: "departments",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "departments.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "departments",
            commonSearchKey: "departments",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "departments.updated_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "departments",
            commonSearchKey: "departments",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const generalsettingsTableData = {
    keys: ["start", "end", "region", "site", "number", "created_at", "updated_at"],
    config: {
        start: {
            isVisible: true,
            label: "Start Year",
            class: "",
            searchKey: "year_limits.start",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "year_limits",
            commonSearchKey: "year_limits",
            commonSearchObjectKey: "start"
        },
        end: {
            isVisible: true,
            label: "End Year",
            class: "",
            searchKey: "year_limits.end",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "year_limits",
            commonSearchKey: "year_limits",
            commonSearchObjectKey: "end"
        },
        region: {
            isVisible: true,
            label: "Region",
            class: "",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "region",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        site: {
            isVisible: true,
            label: "Site",
            class: "",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "site",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        number: {
            isVisible: true,
            label: "Number of Years",
            class: "",
            searchKey: "year_limits.number",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "year_limits",
            commonSearchKey: "year_limits",
            commonSearchObjectKey: "number"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "year_limits.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "year_limits",
            commonSearchKey: "year_limits",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "year_limits.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "year_limits",
            commonSearchKey: "year_limits",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const fundingsourcesettingsTableData = {
    keys: ["name", "project", "client", "description", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "funding_sources.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "funding_sources",
            commonSearchKey: "funding_sources",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        description: {
            isVisible: true,
            label: "Description",
            class: "",
            searchKey: "funding_sources.description",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "funding_sources",
            commonSearchKey: "funding_sources",
            commonSearchObjectKey: "description"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "funding_sources.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "funding_sources",
            commonSearchKey: "funding_sources",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "funding_sources.updated_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "funding_sources",
            commonSearchKey: "funding_sources",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const prioritysettingsTableData = {
    keys: ["name", "start", "end", "region", "site", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "priorities.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "priorities",
            commonSearchKey: "priorities",
            commonSearchObjectKey: "name"
        },
        start: {
            isVisible: true,
            label: "Start Year",
            class: "",
            searchKey: "priorities.start",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "priorities",
            commonSearchKey: "priorities",
            commonSearchObjectKey: "start"
        },
        end: {
            isVisible: true,
            label: "End Year",
            class: "",
            searchKey: "priorities.end",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "priorities",
            commonSearchKey: "priorities",
            commonSearchObjectKey: "end"
        },
        region: {
            isVisible: true,
            label: "Region",
            class: "",
            searchKey: "regions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "region",
            commonSearchKey: "regions",
            commonSearchObjectKey: "name"
        },
        site: {
            isVisible: true,
            label: "Site",
            class: "",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "site",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "priorities.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "priorities",
            commonSearchKey: "priorities",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "priorities.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "priorities",
            commonSearchKey: "priorities",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const clientTableData = {
    keys: [
        "code",
        "name",
        "consultancy",
        "display_blinking_red_plus",
        "ep_name",
        "lock_total_devices",
        "modify_next_due_date",
        "request_email_recipt",
        "schedule_threshold",
        "trailing_view_current_month",
        "use_threshold_for_quarterly",
        "cmms_url",
        "comments",
        "created_at",
        "updated_at"
    ],
    config: {
        code: {
            isVisible: true,
            label: "Client Code",
            class: "",
            searchKey: "clients.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Client Name",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "code"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "object",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        display_blinking_red_plus: {
            isVisible: true,
            label: "Display Blinking Red Plus",
            class: "",
            searchKey: "clients.display_blinking_red_plus",
            type: "boolean",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "display_blinking_red_plus"
        },
        ep_name: {
            isVisible: true,
            label: "Ep Name",
            class: "",
            searchKey: "clients.ep_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "ep_name"
        },
        lock_total_devices: {
            isVisible: true,
            label: "Lock Total Devices",
            class: "",
            searchKey: "clients.lock_total_devices",
            type: "boolean",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "lock_total_devices"
        },
        modify_next_due_date: {
            isVisible: true,
            label: "Modify Next Due Date",
            class: "",
            searchKey: "clients.modify_next_due_date",
            type: "boolean",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "modify_next_due_date"
        },
        request_email_recipt: {
            isVisible: true,
            label: "Request Email Recipt",
            class: "",
            searchKey: "clients.request_email_recipt",
            type: "boolean",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "request_email_recipt"
        },
        schedule_threshold: {
            isVisible: true,
            label: "Schedule Threshold",
            class: "",
            searchKey: "clients.schedule_threshold",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "schedule_threshold"
        },
        trailing_view_current_month: {
            isVisible: true,
            label: "Trailing View Current Month",
            class: "",
            searchKey: "clients.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "code"
        },
        use_threshold_for_quarterly: {
            isVisible: true,
            label: "Use Threshold For Quarterly",
            class: "",
            searchKey: "clients.trailing_view_current_month",
            type: "boolean",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "trailing_view_current_month"
        },
        cmms_url: {
            isVisible: true,
            label: "Cmms Url",
            class: "",
            searchKey: "clients.cmms_url",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "cmms_url"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "clients.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "clients.created_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "clients.updated_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "clients",
            commonSearchKey: "clients",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const userTableData = {
    keys: [
        "name",
        "first_name",
        "last_name",
        "printed_name",
        "email",
        "consultancy",
        "role",
        "group",
        // "buildings",
        // "projects",
        "title",
        "credentials",
        "department",
        "work_phone",
        "cell_phone",
        "building_name",
        "floor",
        "room_number",
        "room_name",
        "city",
        "location",
        "state",
        "zip_code",
        "address",
        "emergency_contact_no",
        "emergency_contact_name",
        "notes",
        "last_seen_at",
        "last_sign_in_at",
        "last_sign_out_at",
        "created_at",
        "updated_at"
    ],
    config: {
        name: {
            isVisible: true,
            label: "User Name",
            class: "reg-name",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        first_name: {
            isVisible: true,
            label: "First Name",
            class: "reg-name",
            searchKey: "users.first_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "first_name"
        },
        last_name: {
            isVisible: true,
            label: "Last Name",
            class: "reg-name",
            searchKey: "users.last_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "last_name"
        },
        printed_name: {
            isVisible: true,
            label: "Printed Name",
            class: "reg-name",
            searchKey: "users.printed_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "printed_name"
        },
        email: {
            isVisible: true,
            label: "Email",
            class: "",
            searchKey: "users.email",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "email"
        },
        last_seen_at: {
            isVisible: true,
            label: "Last Seen",
            class: "",
            searchKey: "users.last_seen_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "last_seen_at"
        },
        role: {
            isVisible: true,
            label: "Role",
            class: "",
            searchKey: "roles.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "role",
            commonSearchKey: "roles",
            commonSearchObjectKey: "name"
        },
        // buildings: {
        //     isVisible: true,
        //     label: "Buildings",
        //     class: "",
        //     searchKey: "buildings.name",
        //     type: "string",
        //     hasWildCardSearch: true,
        //     hasCommonSearch: false,
        //     getListTable: "buildings",
        //     commonSearchKey: "buildings",
        //     commonSearchObjectKey: "name"
        // },
        group: {
            isVisible: true,
            label: "Group",
            class: "",
            searchKey: "groups.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "groups",
            commonSearchKey: "groups",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        // projects: {
        //     isVisible: true,
        //     label: "Associated Projects",
        //     class: "",
        //     searchKey: "projects.name",
        //     type: "string",
        //     hasWildCardSearch: true,
        //     hasCommonSearch: false,
        //     getListTable: "projects",
        //     commonSearchKey: "projects",
        //     commonSearchObjectKey: "name"
        // },
        title: {
            isVisible: true,
            label: "Title",
            class: "",
            searchKey: "users.title",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "title"
        },
        work_phone: {
            isVisible: true,
            label: "Work Phone",
            class: "reg-name",
            searchKey: "users.work_phone",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "work_phone"
        },
        cell_phone: {
            isVisible: true,
            label: "Cell Phone",
            class: "reg-name",
            searchKey: "users.cell_phone",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "cell_phone"
        },
        building_name: {
            isVisible: true,
            label: "Building Name",
            class: "reg-name",
            searchKey: "users.building_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "building_name"
        },
        floor: {
            isVisible: true,
            label: "Floor",
            class: "reg-name",
            searchKey: "users.floor",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "floor"
        },
        room_number: {
            isVisible: true,
            label: "Room Number",
            class: "reg-name",
            searchKey: "users.room_number",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "room_number"
        },
        room_name: {
            isVisible: true,
            label: "Room Name",
            class: "reg-name",
            searchKey: "users.room_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "room_name"
        },
        emergency_contact_no: {
            isVisible: true,
            label: "Emergency Contact Number",
            class: "reg-name",
            searchKey: "users.emergency_contact_no",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "emergency_contact_no"
        },
        emergency_contact_name: {
            isVisible: true,
            label: "Emergency Contact Name",
            class: "reg-name",
            searchKey: "users.emergency_contact_name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "emergency_contact_name"
        },
        notes: {
            isVisible: true,
            label: "Notes",
            class: "reg-name",
            searchKey: "users.notes",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "notes"
        },
        department: {
            isVisible: true,
            label: "Department",
            class: "reg-name",
            searchKey: "users.department",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "department"
        },
        credentials: {
            isVisible: true,
            label: "Credentials",
            class: "reg-name",
            searchKey: "users.credentials",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "credentials"
        },
        city: {
            isVisible: true,
            label: "City",
            class: "reg-name",
            searchKey: "users.city",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "city"
        },
        last_sign_in_at: {
            isVisible: true,
            label: "Last Sign in At",
            class: "reg-name",
            searchKey: "users.last_sign_in_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "last_sign_in_at"
        },
        last_sign_out_at: {
            isVisible: true,
            label: "Last Sign out At",
            class: "reg-name",
            searchKey: "users.last_sign_out_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "last_sign_out_at"
        },
        location: {
            isVisible: true,
            label: "Location",
            class: "reg-name",
            searchKey: "users.location",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "location"
        },
        state: {
            isVisible: true,
            label: "State",
            class: "reg-name",
            searchKey: "users.state",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "state"
        },
        zip_code: {
            isVisible: true,
            label: "Zip Code",
            class: "reg-name",
            searchKey: "users.zip_code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "zip_code"
        },
        address: {
            isVisible: true,
            label: "Address",
            class: "reg-name",
            searchKey: "users.address",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "address"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "users.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "users.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "users",
            commonSearchKey: "users",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const importHistoryTableData = {
    keys: ["name", "import_project", "user", "import_site", "created_at"],
    config: {
        name: {
            isVisible: true,
            label: "File Name",
            class: "reg-name",
            searchKey: "fca_sheets.sheet",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "fca_sheets",
            commonSearchKey: "fca_sheets",
            commonSearchObjectKey: "sheet"
        },
        import_project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "project",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        user: {
            isVisible: true,
            label: "User",
            class: "",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "user",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        import_site: {
            isVisible: true,
            label: "Site",
            class: "",
            searchKey: "sites.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "site",
            commonSearchKey: "sites",
            commonSearchObjectKey: "name"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "fca_sheets.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "fca_sheets",
            commonSearchKey: "fca_sheets",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "fca_sheets.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "fca_sheets",
            commonSearchKey: "fca_sheets",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const assetconditionsettingsTableData = {
    keys: ["name", "project", "client", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "asset_conditions.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "asset_conditions",
            commonSearchKey: "asset_conditions",
            commonSearchObjectKey: "name"
        },
        project: {
            isVisible: true,
            label: "Project",
            class: "",
            searchKey: "projects.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "projects",
            commonSearchKey: "projects",
            commonSearchObjectKey: "name"
        },
        client: {
            isVisible: true,
            label: "Client",
            class: "",
            searchKey: "clients.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "client",
            commonSearchKey: "clients",
            commonSearchObjectKey: "name"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "asset_conditions.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "asset_conditions",
            commonSearchKey: "asset_conditions",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "asset_conditions.updated_at",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "asset_conditions",
            commonSearchKey: "asset_conditions",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const userPermssionTableData = {
    keys: ["name", "users", "consultancy", "created_at", "updated_at"],
    config: {
        name: {
            isVisible: true,
            label: "Name",
            class: "",
            searchKey: "groups.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "fca_sheets",
            commonSearchKey: "fca_sheets",
            commonSearchObjectKey: "sheet"
        },
        users: {
            isVisible: true,
            label: "Consultancy Users",
            class: "",
            searchKey: "users.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: true,
            getListTable: "assigned_users",
            commonSearchKey: "users",
            commonSearchObjectKey: "name"
        },
        consultancy: {
            isVisible: true,
            label: "Consultancy",
            class: "",
            searchKey: "groups.consultancy",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "fca_sheets",
            commonSearchKey: "fca_sheets",
            commonSearchObjectKey: "sheet"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "groups.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "groups",
            commonSearchKey: "groups",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "groups.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "groups",
            commonSearchKey: "groups",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};

export const consultancyTableData = {
    keys: ["code", "name", "comments", "created_at", "updated_at"],
    config: {
        code: {
            isVisible: true,
            label: "Consultancy Code",
            class: "",
            searchKey: "consultancies.code",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "code"
        },
        name: {
            isVisible: true,
            label: "Consultancy Name",
            class: "reg-name",
            searchKey: "consultancies.name",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "name"
        },
        comments: {
            isVisible: true,
            label: "Comments",
            class: "",
            searchKey: "consultancies.comments",
            type: "string",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancy",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "comments"
        },
        created_at: {
            isVisible: true,
            label: "Created At",
            class: "",
            searchKey: "consultancies.created_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "created_at"
        },
        updated_at: {
            isVisible: true,
            label: "Updated At",
            class: "",
            searchKey: "consultancies.updated_at",
            type: "date",
            hasWildCardSearch: true,
            hasCommonSearch: false,
            getListTable: "consultancies",
            commonSearchKey: "consultancies",
            commonSearchObjectKey: "updated_at"
        }
    },
    data: []
};
