import React, { useMemo, useState } from "react";
import {
  useGetNoticeQuery,
  useGetNoticeCategoriesQuery,
} from "../../redux/features/contentSlice";

const CaretRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="m9 6 7 6-7 6V6Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const NoticeList = () => {
  const { data: noticeData, isLoading: noticeLoading } = useGetNoticeQuery();
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetNoticeCategoriesQuery();

  const notices = noticeData?.data ?? [];
  const categories = categoriesData?.data ?? [];

  const sortedNotices = useMemo(
    () =>
      [...notices].sort(
        (a, b) => new Date(b.notice_date) - new Date(a.notice_date),
      ),
    [notices],
  );

  const [selectedNotice, setSelectedNotice] = useState(null);

  // Set first notice as selected when data loads
  React.useEffect(() => {
    if (sortedNotices.length > 0 && !selectedNotice) {
      setSelectedNotice(sortedNotices[0]);
    }
  }, [sortedNotices, selectedNotice]);

  if (noticeLoading || categoriesLoading) {
    return (
      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (notices.length === 0) {
    return (
      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-gray-500 text-lg">No notices available yet.</p>
        </div>
      </section>
    );
  }

  const selectedCategory = categories.find(
    (cat) => cat.category_id === selectedNotice?.category_id,
  );

  const openNoticeAttachment = (notice) => {
    if (!notice?.attachment_url) {
      setSelectedNotice(notice);
      return;
    }
    const url = `${import.meta.env.VITE_IMG_URL}${notice.attachment_url}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSelectedNotice(notice);
  };

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="border border-slate-200 bg-white px-4 py-6 shadow-lg shadow-slate-200/60 sm:px-6 sm:py-8">
            <div className="mb-6 flex flex-col gap-2 border-b border-slate-200 pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary-color">
                Latest Updates
              </p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">
                School Notices
              </h3>
              <p className="text-sm text-slate-500">
                {sortedNotices.length}{" "}
                {sortedNotices.length === 1 ? "notice" : "notices"}
              </p>
            </div>
            <div className="flex flex-col divide-y divide-slate-200 max-h-96 overflow-y-auto">
              {sortedNotices.map((notice) => {
                const isActive = selectedNotice?.id === notice.id;
                return (
                  <button
                    key={notice.id}
                    type="button"
                    onClick={() => openNoticeAttachment(notice)}
                    className={`flex w-full flex-col items-start justify-between gap-3 px-3 py-4 text-left transition ${
                      isActive ? "bg-slate-50" : "hover:bg-slate-50"
                    }`}
                  >
                    <p
                      className={`flex items-start text-sm sm:text-base ${
                        isActive ? "text-secondary-color" : "text-slate-900"
                      }`}
                    >
                      <span
                        className={`mr-2 mt-1 flex-shrink-0 ${
                          isActive ? "text-secondary-color" : "text-slate-700"
                        }`}
                      >
                        <CaretRightIcon />
                      </span>
                      <span className="line-clamp-2">{notice.title}</span>
                    </p>
                    <span className="ml-6 text-sm text-slate-500 sm:ml-0">
                      {formatDate(notice.notice_date)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeList;
