def solution(rteam, rlog):
    # 팀의 개수 (rteam에 등장하는 팀 번호 중 최대값 혹은 rteam의 유니크한 값 개수)
    num_teams = max(rteam) 
    # 팀별 통계 초기화 {team_id: [inSum, inCnt, outSum, outCnt]}
    stats = {i: [0, 0, 0, 0] for i in range(1, num_teams + 1)}
    
    # 1. 집계
    for rid, tid, score in rlog:
        evaluator_team = rteam[rid-1]
        
        if evaluator_team == tid:
            stats[tid][0] += score # inSum
            stats[tid][1] += 1     # inCnt
        else:
            stats[tid][2] += score # outSum
            stats[tid][3] += 1     # outCnt
            
    # 2. 결과 계산
    answer = []
    for i in range(1, num_teams + 1):
        inSum, inCnt, outSum, outCnt = stats[i]
        
        # Zero Division 체크
        if inCnt == 0 and outCnt == 0: # 아무 평가도 없는 경우 (필요 시)
            answer.append("lowest")
            continue
            
        # 각 평균 구하기
        avg_in = inSum / inCnt if inCnt > 0 else 0
        avg_out = outSum / outCnt if outCnt > 0 else 0
        
        # 친목 점수 계산 및 문자열 처리
        if avg_out == 0:
            if avg_in > 0: answer.append("highest")
            else: answer.append("lowest")
        elif avg_in == 0:
            answer.append("lowest")
        else:
            # 소수점 처리 여부에 따라 int() 혹은 str() 사용
            res = avg_in / avg_out
            answer.append(str(int(res)) if res == int(res) else str(res))
            
    return answer