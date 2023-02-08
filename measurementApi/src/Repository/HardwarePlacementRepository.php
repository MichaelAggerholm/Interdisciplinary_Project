<?php

namespace App\Repository;

use App\Entity\HardwarePlacement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<HardwarePlacement>
 *
 * @method HardwarePlacement|null find($id, $lockMode = null, $lockVersion = null)
 * @method HardwarePlacement|null findOneBy(array $criteria, array $orderBy = null)
 * @method HardwarePlacement[]    findAll()
 * @method HardwarePlacement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HardwarePlacementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, HardwarePlacement::class);
    }

    public function save(HardwarePlacement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(HardwarePlacement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return HardwarePlacement[] Returns an array of HardwarePlacement objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('h.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?HardwarePlacement
//    {
//        return $this->createQueryBuilder('h')
//            ->andWhere('h.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
