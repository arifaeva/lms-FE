import { isExpandedAtom } from "~/atoms/sidebar.atom";

import { ArchiveIcon } from "../icons/archive.icon";
import AssignmentsIcon from "../icons/assignments.icon";
import { BugIcon } from "../icons/bug.icon";
import { CertificateIcon } from "../icons/certificate.icon";
import { CommandIcon } from "../icons/command.icon";
import { CourseIcon } from "../icons/course.icon";
import DevscaleLogo from "../icons/devscale-logo.icon";
import { ForumIcon } from "../icons/forum.icon";
import { GuideIcon } from "../icons/guide.icon";
import { NotesIcon } from "../icons/notes.icon";
import { SearchIcon } from "../icons/search.icon";
import { SessionsIcon } from "../icons/sessions.icon";
import { SidebarIcon } from "../icons/sidebar.icon";
import { WidgetIcon } from "../icons/widget.icon";

import { Menu } from "../ui/menu";

import * as SearchCommand from "app/components/ui/search-command";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useAtom } from "jotai";

export interface SidebarProps {
  mode: "USER" | "STUDENT" | "ADMIN";
}

export const Sidebar = ({ mode }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useAtom(isExpandedAtom);

  return (
    <motion.nav
      transition={{ duration: 0.15 }}
      initial={{ width: "262px" }}
      animate={{ width: isExpanded ? "262px" : "62px" }}
      exit={{ width: "62px" }}
      className="flex h-screen max-h-screen flex-col space-y-2 overflow-auto border-r border-r-slate-200 bg-slate-50 py-4"
    >
      <section
        className={twMerge(
          "relative flex h-fit w-full items-center justify-between px-3",
        )}
      >
        <DevscaleLogo
          onClick={() => setIsExpanded(true)}
          className="absolute top-0 left-3.5 z-1 size-10 cursor-pointer"
        />
        <AnimatePresence>
          {isExpanded && (
            <SidebarIcon
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute top-1.5 right-3.5 flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-neutral-900 text-xl shadow-md transition-all"
            />
          )}
        </AnimatePresence>
      </section>

      <section className="px-3 pt-12">
        <SearchCommand.Trigger>
          <button
            type="button"
            className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-slate-200 bg-white fill-slate-600 p-2.5 text-slate-600 text-xs"
          >
            <SearchIcon className="-ml-0.5 block size-5 min-h-5 min-w-5" />
            {isExpanded && (
              <>
                <span className="whitespace-nowrap text-sm">
                  Search something...
                </span>
                <div className="flex items-center space-x-0.5">
                  <CommandIcon className="block size-5 rounded-sm border border-slate-600 p-0.5">
                    <div className="flex size-5 items-center justify-center rounded-sm border border-slate-600 p-0.5">
                      <span>K</span>
                    </div>
                  </CommandIcon>
                </div>
              </>
            )}
          </button>
        </SearchCommand.Trigger>
      </section>

      <section className="flex h-full flex-1 flex-col justify-between px-3">
        <div className="space-y-4">
          <section className="space-y-1">
            <Menu
              href="/dashboard"
              icon={<WidgetIcon className="size-5 min-h-5 min-w-5" />}
              label="Dashboard"
            />
            <Menu
              href="/dashboard/courses"
              icon={<CourseIcon className="size-5 min-h-5 min-w-5" />}
              label="All Courses"
            />
            <Menu
              href="https://guides.devscale.id/javascript/introduction"
              icon={<GuideIcon className="size-5 min-h-5 min-w-5" />}
              target="_blank"
              label="Guides"
            />
            <Menu
              href="/dashboard/mynotes"
              icon={<NotesIcon className="size-5 min-h-5 min-w-5" />}
              label="My Notes"
            />
            <Menu
              href="/dashboard/certificate"
              icon={<CertificateIcon className="size-5 min-h-5 min-w-5" />}
              label="Certificate"
            />
          </section>

          <hr className="my-6" />

          <section className="space-y-1">
            <Menu
              href="/dashboard/sessions"
              icon={<SessionsIcon className="size-5 min-h-5 min-w-5" />}
              label="Sessions"
            />
            <Menu
              href="/dashboard/assignments"
              icon={<AssignmentsIcon className="size-5 min-h-5 min-w-5" />}
              label="Assignments"
            />
            <Menu
              href="/dashboard/archives"
              icon={<ArchiveIcon className="size-5 min-h-5 min-w-5" />}
              label="Archives"
            />
          </section>

          {mode === "ADMIN" && (
            <>
              <hr className="my-6" />
              <section className="space-y-1">
                <Menu
                  href="/dashboard/admin/testimonials"
                  icon={<ForumIcon className="size-5 min-h-5 min-w-5" />}
                  label="Admin Testimonials"
                />
                <Menu
                  href="/dashboard/admin/courses"
                  icon={<CourseIcon className="size-5 min-h-5 min-w-5" />}
                  label="Admin Courses"
                />
                <Menu
                  href="/dashboard/admin/archives"
                  icon={<ArchiveIcon className="size-5 min-h-5 min-w-5" />}
                  label="Admin Archives"
                />
                <Menu
                  href="/dashboard/admin/mentorship"
                  icon={<ForumIcon className="size-5 min-h-5 min-w-5" />}
                  label="Admin Mentorship"
                />
              </section>
            </>
          )}
        </div>

        <div className="my-6 border border-slate-600 border-x-0 border-t border-b-0">
          <Menu
            href="/dashboard/report-bug"
            icon={<BugIcon className="size-5 min-h-5 min-w-5" />}
            label="Report Bug"
          />
        </div>
      </section>
    </motion.nav>
  );
};
