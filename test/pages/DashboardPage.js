

class DashboardPage {

    get header_Dashboard(){
        return $('h6.oxd-topbar-header-breadcrumb-module').getText();
    }
}

export default new DashboardPage();
