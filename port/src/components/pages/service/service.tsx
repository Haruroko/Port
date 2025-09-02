export const Service: React.FC = () => {
    return (
        <div className="w-full h-auto flex sm:flex-row flex-col py-10 p-4 md:p-6 xl:p-10 gap-x-10 lg:gap-x-5 xl:gap-x-28 justify-start">
            <div className="flex flex-col w-auto items-start h-auto">
                <div className="flex items-center gap-x-4 w-full">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl">회사에서 개발에 참여한 서비스</h2>
                    <div className="h-2 w-2 bg-black rounded-full" />
                </div>
                <div className="flex flex-col w-full gap-x-40 gap-y-20 mt-6 pl-4">
                    <div className="flex flex-col">
                        <h2 className="text-xl lg:text-2xl xl:text-3xl">잔다 (2023 ~ 2025, 2년 근무)</h2>
                        <div className="flex flex-col pl-4">
                            <h2 className="text-xl xl:text-2xl mt-4">정글웹</h2>
                            <div className="flex flex-col gap-y-2 ml-4 mt-2">
                                <p> - 지속적으로 새로운 디자인의 템플릿 아이디어 제공 및 개발</p>
                                <p> - 김해연구원 기관에서 받은 외주 개발에 직접 참여</p>
                            </div>
                        </div>
                        <div className="flex flex-col pl-4">
                            <h2 className="text-xl xl:text-2xl mt-4">위티</h2>
                            <div className="flex flex-col gap-y-2 ml-4 mt-2">
                                <p> - 새로운 기능 개발 계획 구상 및 기획 주도</p>
                                <p> - 기획한 새로운 기능 발표 제안 및 피드백 수용 후 개발</p>
                                <p> - 새로운 디자인 제작</p>
                                <p> - 서버 개발과 업데이트 및 유지 보수 관리</p>
                                <p> - DB 관리 및 DB 데이터를 통한 유저 관리</p>
                                <p> - 사용자들 문의에 대한 질의 응답 및 문제 해결 담당</p>
                                <p> - AI를 사용한 기능 개발</p>
                                <p> - 서비스를 주제로 다른 기업들과 미팅 진행 및 참여</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;