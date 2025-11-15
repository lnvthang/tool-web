import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import WorkIcon from "@mui/icons-material/Work";

export const NAV_ITEMS = [
  {
    id: "jobs",
    label: "Tác vụ",
    icon: WorkIcon,
    children: [
      { id: "job-list", label: "Danh sách tác vụ", path: "/jobs" },
      { id: "job-hisotry", label: "Lịch sử tác vụ", path: "/system/logs" },
      { id: "job-configuration", label: "Cấu hình tác vụ", path: "/admin/config" },
    ],
  },
  {
    id: "systems",
    label: "Hệ thống",
    icon: SettingsIcon,
    children: [
      { id: "system-overview", label: "Tổng quan", path: "/system/overview" },
      { id: "system-logs", label: "Logs", path: "/system/logs" },
      { id: "system-alerts", label: "Cảnh báo", path: "/system/alerts" },
    ],
  },
  {
    id: "admin",
    label: "Quản lí",
    icon: PeopleIcon,
    children: [
      { id: "admin-users", label: "Người dùng", path: "/admin/users" },
      { id: "admin-roles", label: "Vai trò", path: "/admin/roles" },
      { id: "admin-apikeys", label: "Khoá", path: "/admin/apikeys" },
      { id: "admin-config", label: "Cấu hình", path: "/admin/config" },
    ],
  },
  {
    id: "account",
    label: "Tài khoản",
    hidden: true,
    children: [
      { id: "account-profile", label: "Thông tin cá nhân", path: "/profile" },
      { id: "account-logout", label: "Đăng xuất", path: "/logout" },
    ],
  },
];

export const getPageTitleFromPath = (pathname) => {
  for (const section of NAV_ITEMS) {
    for (const child of section.children) {
      if (pathname === child.path || pathname.startsWith(child.path + "/")) {
        return child.label;
      }
    }
  }
  return "Job Runner Console";
};
