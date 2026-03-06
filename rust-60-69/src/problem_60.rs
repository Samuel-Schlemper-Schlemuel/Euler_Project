pub fn main() {
    let mut primes_for_calc: Vec<usize> = [3].to_vec();
    let mut primes_for_test: Vec<usize> = [3, 5, 7, 11, 13].to_vec();
    let mut current: usize = 15;
    let mut answer: usize = 0;

    for num in (5..100_000).step_by(2){
        if it_is_prime(num, &primes_for_calc){
            primes_for_calc.push(num);
        }
    }

    while !find_answer(&mut answer, &primes_for_test, &primes_for_calc){
        println!("{}", primes_for_test[primes_for_test.len() - 1]);
        add_prime(&mut current, &mut primes_for_test);
    }

    println!("A resposta é {answer}");
}


fn add_prime(current: &mut usize, prime_list: &mut Vec<usize>) {
    *current += 2;

    if it_is_prime(*current, &prime_list) {
        prime_list.push(*current);
        return
    } else {
        add_prime(current, prime_list);
    }
}


fn it_is_prime(number: usize, primes_for_calc: &Vec<usize>) -> bool {
    for div in primes_for_calc {
        if *div > (number as f64).sqrt() as usize{
            return true
        }

        if number % div == 0 {
            return false
        }
    }

    panic!("Erro em it_is_prime, nenhum resultado foi encontrado");
}


fn numbers_are_a_pair(numbers: Vec<usize>, 
                        primes_for_calc: &Vec<usize>) -> bool{

    if !it_is_prime(format!("{}{}", numbers[0], numbers[1]).parse()
                    .expect("Text {numbers[0]}{numbers[1]} is not usize"), 
                    primes_for_calc){
        return false
    } else if !it_is_prime(format!("{}{}", numbers[1], numbers[0]).parse()
                    .expect("Text {numbers[1]}{numbers[0]} is not usize"), 
                    primes_for_calc) {
        return false
    }

    return true
}


fn find_answer(answer: &mut usize, primes_for_test: &Vec<usize>, 
               primes_for_calc: &Vec<usize>) -> bool {

    for i in 0..(primes_for_test.len() - 4) {
        for j in (i + 1)..(primes_for_test.len() - 3) {
            if !numbers_are_a_pair(vec![primes_for_test[i], primes_for_test[j]], 
                primes_for_calc) {
                
                continue
            }

            for k in (j + 1)..(primes_for_test.len() - 2) {
                if !numbers_are_a_pair(vec![primes_for_test[i], 
                    primes_for_test[k]], primes_for_calc) || 
                   !numbers_are_a_pair(vec![primes_for_test[j], 
                    primes_for_test[k]], primes_for_calc) {
                    
                    continue
                }

                for l in (k + 1)..(primes_for_test.len() - 1) {
                    if !numbers_are_a_pair(vec![primes_for_test[i], 
                        primes_for_test[l]], primes_for_calc) ||
                       !numbers_are_a_pair(vec![primes_for_test[j], 
                        primes_for_test[l]], primes_for_calc) ||
                       !numbers_are_a_pair(vec![primes_for_test[k], 
                        primes_for_test[l]], primes_for_calc) {
                        
                        continue
                    }

                    let m = primes_for_test[primes_for_test.len() - 1];
                    
                    if !numbers_are_a_pair(vec![primes_for_test[i], m],
                        primes_for_calc) ||
                       !numbers_are_a_pair(vec![primes_for_test[j], m],
                        primes_for_calc) ||
                       !numbers_are_a_pair(vec![primes_for_test[k], m], 
                        primes_for_calc) ||
                       !numbers_are_a_pair(vec![primes_for_test[l], m], 
                        primes_for_calc) {
                        
                        continue
                    } else {
                        *answer = primes_for_test[i] + primes_for_test[j] + 
                            primes_for_test[k] + primes_for_test[l] + m;

                        println!("{} + {} + {} + {} + {} = {}", 
                            primes_for_test[i], primes_for_test[j], 
                            primes_for_test[k], primes_for_test[l], m, *answer);

                        return true 
                    }
                }
            }
        }
    }
    return false
}

